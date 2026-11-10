'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, type QuoteInput } from '@/lib/validation';
import { content, type Locale } from '@/lib/content';

export default function QuoteForm({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteInput) => {
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/quote', {
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium">Name</label>
          <input id="quote-name" type="text" {...register('name')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium">Email</label>
          <input id="quote-email" type="email" {...register('email')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium">Service</label>
          <select id="quote-service" {...register('service')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold">
            <option value="">Select a service</option>
            {t.services.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="quote-budget" className="mb-1.5 block text-sm font-medium">Budget</label>
          <select id="quote-budget" {...register('budget')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold">
            <option value="">Select a range</option>
            <option value="under-500">Under $500</option>
            <option value="500-1500">$500 – $1,500</option>
            <option value="1500-5000">$1,500 – $5,000</option>
            <option value="over-5000">Over $5,000</option>
          </select>
          {errors.budget && <p className="mt-1 text-xs text-red-600">{errors.budget.message}</p>}
        </div>
        <div>
          <label htmlFor="quote-deadline" className="mb-1.5 block text-sm font-medium">Deadline (optional)</label>
          <input id="quote-deadline" type="date" {...register('deadline')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold" />
        </div>
      </div>

      <div>
        <label htmlFor="quote-description" className="mb-1.5 block text-sm font-medium">Project description</label>
        <textarea id="quote-description" rows={5} {...register('description')} className="w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-3 text-sm focus:border-gold" />
        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input id="quote-consent" type="checkbox" {...register('consent')} className="mt-1 h-4 w-4" />
        <label htmlFor="quote-consent" className="text-sm text-charcoal/70">
          I agree to be contacted about this request and accept the privacy policy.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'success' && (
        <p className="rounded-lg bg-sage/15 px-4 py-3 text-sm text-charcoal">Thank you! Your request has been received. We will reply within one business day.</p>
      )}
      {status === 'error' && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request a quote'}
      </button>
    </form>
  );
}
