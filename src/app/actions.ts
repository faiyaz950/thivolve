"use server";

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      status: 'error',
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // Simulate API call or database interaction
  console.log("Form data submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Example: Send an email, save to database, etc.
  // For this example, we'll just return a success message.

  return {
    message: "Thank you for your inquiry! We will get back to you soon.",
    status: 'success',
  };
}
