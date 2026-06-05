'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">About PRANAG TITLE SUPPORT</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Title search support designed to keep closings moving with certainty.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {aboutContent.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2">
            {aboutContent.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.08)]"
              >
                <p className="text-base leading-7 text-slate-700">{bullet}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
