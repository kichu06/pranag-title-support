'use client';

import { motion } from 'framer-motion';
import { whyChooseUsContent } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function WhyChooseUsSection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A trusted partner for title operations and vendor support.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{whyChooseUsContent.description}</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUsContent.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.16)]"
              >
                <div className="inline-flex rounded-full bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                  {card.badge ?? 'Core'}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
