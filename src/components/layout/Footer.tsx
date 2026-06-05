import {  Mail, Phone } from 'lucide-react';
import { FaLinkedinIn } from "react-icons/fa";
import { footerContent } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1fr_1fr]">
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">PRANAG TITLE SUPPORT</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Trusted search support for title teams and settlement vendors.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{footerContent.summary}</p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="rounded-[1.75rem] bg-slate-950/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${footerContent.contactEmail}`}
                     className="mt-1 block max-w-full text-sm font-medium text-slate-400 transition hover:text-white break-all"
                    >
                      {footerContent.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${footerContent.contactPhone.replace(/\D/g, '')}`}
                      className="mt-1 block text-sm font-medium text-slate-400 transition hover:text-white whitespace-nowrap"
                    >
                      {footerContent.contactPhone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                    <FaLinkedinIn className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">LinkedIn</p>
                    <a
                      href={footerContent.socialLinks.find((item) => item.label.toLowerCase().includes('linkedin'))?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block max-w-full text-sm font-medium text-slate-400 transition hover:text-white truncate"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Services</p>
            <div className="mt-6 flex flex-col gap-3 text-sm leading-7 text-slate-400">
              {footerContent.serviceLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Company</p>
            <div className="mt-6 flex flex-col gap-3 text-sm leading-7 text-slate-400">
              {footerContent.companyLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <a
              href={footerContent.socialLinks.find((item) => item.label.toLowerCase().includes('linkedin'))?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <FaLinkedinIn className="h-4 w-4 text-blue-400" />
              View LinkedIn Profile
            </a>
           <p className="text-sm text-slate-500">
                {footerContent.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
