'use client';

import { motion } from 'framer-motion';
import { vendorPartnershipsContent } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function PartnershipsSection() {
  return (
    <section id="partners" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Vendor partnerships</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Partner-ready support for title vendors and settlement teams.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              {vendorPartnershipsContent.description}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {vendorPartnershipsContent.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.16)]"
              >
                <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                  {card.title}
                </div>
                <p className="text-base leading-7 text-slate-700">{card.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">Workflow snapshot</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Aligned intake & order routing</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We align with existing vendor workflows so search orders move smoothly from intake to delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Coordinated status visibility</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Clear milestones and handoff points keep your settlement teams informed throughout every search.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Settlement-ready delivery</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Search results are delivered with the verification detail your title and closing teams expect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
