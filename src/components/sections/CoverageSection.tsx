'use client';

import { motion } from 'framer-motion';
import { coverageAreasContent } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-slate-950 py-20 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">Coverage & jurisdiction</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Regional coverage backed by local title expertise.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {coverageAreasContent.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)] sm:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Coverage snapshot</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {coverageAreasContent.regions.map((region) => (
                    <div key={region.region} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">{region.region}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-400">{coverageAreasContent.note}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coverageAreasContent.regions.map((region) => (
                <div key={region.region} className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{region.region}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{region.description}</p>
                  {region.counties ? (
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                      {region.counties.join(', ')}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
