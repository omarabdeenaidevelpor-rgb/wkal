'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactInput } from '@/lib/validation';
import { content, type Locale } from '@/lib/content';

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(body.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input
          id="contact-name"
          type="text"
          {...register('name')}
          className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">Email</label>
        <input
          id="contact-email"
          type="email"
          {...register('email')}
          className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea
          id="contact-message"
          rows={5}
          {...register('message')}
          className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input id="contact-consent" type="checkbox" {...register('consent')} className="mt-1 h-4 w-4" />
        <label htmlFor="contact-consent" className="text-sm text-charcoal/70">
          I agree to be contacted about my inquiry and accept the privacy policy.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'success' && (
        <p className="rounded-lg bg-sage/15 px-4 py-3 text-sm text-charcoal">Thank you! Your message has been sent.</p>
      )}
      {status === 'error' && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
