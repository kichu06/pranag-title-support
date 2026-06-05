'use client';

import { FormEvent, useState } from 'react';
import {  Mail, Phone } from 'lucide-react';
import { contactContent } from '@/data/content';
import { FaLinkedinIn } from 'react-icons/fa6';


interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.message || 'Unable to send your message. Please try again.');
      }

      setSuccessMessage('Thanks for reaching out — we will respond within one business hour.');
      setFormState({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error sending your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">{contactContent.title}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {contactContent.description}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {contactContent.formHeadline}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactContent.details.map((detail) => {
                const Icon =
                  detail.type === 'email'
                    ? Mail
                    : detail.type === 'phone'
                    ? Phone
                    : detail.label.toLowerCase().includes('linkedin')
                    ? FaLinkedinIn
                    : Mail;

                const isLinkedIn = detail.label.toLowerCase().includes('linkedin');
                const href = isLinkedIn
                  ? detail.value.startsWith('http')
                    ? detail.value
                    : `https://${detail.value}`
                  : detail.type === 'email'
                  ? `mailto:${detail.value}`
                  : detail.type === 'phone'
                  ? `tel:${detail.value.replace(/[^\d+]/g, '')}`
                  : undefined;

                return (
                  <div key={detail.label} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">{detail.label}</p>
                        {isLinkedIn ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-base font-medium text-slate-700 hover:text-blue-700"
                          >
                            View LinkedIn Profile
                          </a>
                        ) : href ? (
                          <a
                            href={href}
                            className="mt-2 block text-base font-medium text-slate-700 hover:text-blue-700"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-base font-medium text-slate-700">{detail.value}</p>
                        )}
                        {detail.subtext ? <p className="mt-2 text-sm text-slate-500">{detail.subtext}</p> : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.12)]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-900">Name</span>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your full name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-900">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-900">Company</span>
                <input
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Company name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-900">Message</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us about your title search needs"
                />
              </label>

              {successMessage ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  {successMessage}
                </div>
              ) : null}

              {errorMessage ? (
                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
                  {errorMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending request...' : 'Send Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
