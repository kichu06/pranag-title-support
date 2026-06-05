'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/data/content';
import { fadeInScale, fadeInUp, staggerContainer } from '@/lib/motion';

export default function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 shadow-sm"
            >
              {heroContent.eyebrow}
            </motion.span>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-[3.25rem]">
                Fast, Accurate & Scalable
                <br />
                Title Search Support
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Supporting title agencies, settlement providers, attorneys, and real estate professionals with dependable county-level search services.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={heroContent.ctaPrimary.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
              >
                {heroContent.ctaPrimary.label}
              </a>
              <a
                href={heroContent.ctaSecondary.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
              >
                {heroContent.ctaSecondary.label}
              </a>
            </div>

            <motion.div variants={fadeInUp} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                '✓ 24–48 Hour Turnaround',
                '✓ Manual County Verification',
                '✓ Dedicated QC Process',
                '✓ Rural Jurisdiction Support',
              ].map((item) => (
                <div key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeInScale}
            className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-4 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.15)] sm:p-6"
          >
            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-6 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300">TITLE SUPPORT WORKFLOW</p>
              <div className="mt-5 space-y-4">
                {[
                  'Order Intake',
                  'County Research',
                  'Municipal Verification',
                  'QC Review',
                  'Final Delivery',
                ].map((step, index) => (
                  <div key={step} className="rounded-3xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm font-medium text-slate-100 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span>{step}</span>
                      {index < 4 ? <span className="text-sky-300">↓</span> : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  '24–48 Hour Turnaround',
                  'Manual County Verification',
                  'Rural Jurisdiction Expertise',
                  'White-Label Vendor Support',
                ].map((feature) => (
                  <div key={feature} className="rounded-3xl bg-slate-900/95 px-4 py-3 text-sm text-slate-100 ring-1 ring-slate-800">
                    <p className="font-semibold">✓ {feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
