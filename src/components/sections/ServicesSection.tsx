'use client';

import { motion } from 'framer-motion';
import {
  Building,
  DollarSign,
  House,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { servicesContent } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const iconMap = {
  'building-check': Building,
  'currency-dollar': DollarSign,
  'house-check': House,
  'shield-check': ShieldCheck,
  'sparkles': Sparkles,
  'bolt': Zap,
} as const;


export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Core service capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Search services designed for title teams that need accuracy, speed, and coverage.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{servicesContent.description}</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {servicesContent.cards.map((card) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Sparkles;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_90px_-40px_rgba(15,23,42,0.16)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  <p className="mt-4 text-sm font-medium text-blue-700">{card.detail}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
