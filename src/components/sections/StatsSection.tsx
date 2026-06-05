'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const stats = [
  {
    label: '24–48 Hour Turnaround',
    description: 'Fast delivery on core search packages with expedited rush support available for time-sensitive closings.',
  },
  {
    label: 'Quality-Controlled Process',
    description: 'Every order is reviewed through a layered quality assurance workflow before final delivery.',
  },
  {
    label: 'Scalable Capacity',
    description: 'Flexible search operations designed to absorb overflow volume and support peak demand.',
  },
  {
    label: 'Rural County Expertise',
    description: 'Specialized coverage in hard-to-access jurisdictions where local process knowledge is essential.',
  },
];

export default function StatsSection() {
  return (
    <section id="capacity" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Built for consistent execution</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Proven metrics that support title operations at scale.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              We combine speed, trust, capacity, and jurisdictional experience into a unified support model for title agencies and settlement vendors.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-40px_rgba(15,23,42,0.14)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                <p className="mt-4 text-base leading-7 text-slate-700">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
