import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';

// Hero: Spline 3D scene, name, tagline, philosophy and magnetic CTA
export default function Hero() {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  const onMouseMoveMagnetic = (e) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * 0.15}px, ${relY * 0.15}px)`;
  };
  const onMouseLeaveMagnetic = () => {
    const el = ctaRef.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient and rays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-azure-500/30 via-sky-300/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.35),transparent)]" />

      {/* 3D Spline scene */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-azure-300/40 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs font-medium text-azure-800 dark:text-azure-200 backdrop-blur">
            <Rocket className="size-3.5" /> Building the next-gen personal brand
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dishan De Silva
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-700 dark:text-slate-300">
            Software Engineer | Web Developer | Designer | YouTuber (Dishan DeSEEKER)
          </p>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            “There can be no one better than yourself — so be the best version of you. No one can play your role better than you.”
          </p>

          {/* Magnetic CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div
              onMouseMove={onMouseMoveMagnetic}
              onMouseLeave={onMouseLeaveMagnetic}
              className="inline-block"
            >
              <a
                ref={ctaRef}
                href="#work"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-azure-600 to-sky-500 px-6 py-3 text-white shadow-lg shadow-azure-500/30 transition-transform will-change-transform"
              >
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                View Portfolio
                <ExternalLink className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-6 py-3 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-800 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
