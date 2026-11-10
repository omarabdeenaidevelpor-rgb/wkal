import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Enter a valid email address').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
  website: z.string().max(0).optional()
});

export const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  service: z.string().min(1, 'Select a service'),
  budget: z.string().min(1, 'Select a budget range'),
  deadline: z.string().optional(),
  description: z.string().min(20, 'Please describe your project in at least 20 characters').max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
  website: z.string().max(0).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
