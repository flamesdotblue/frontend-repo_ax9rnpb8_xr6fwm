import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Mail, Github, Linkedin, Youtube } from 'lucide-react';

// Engage = Work (Projects + Achievements + YouTube) + Contact + Footer
export default function Engage() {
  // Simple modal for YouTube preview
  const [video, setVideo] = useState(null);
  const dialogRef = useRef(null);

  const projects = [
    {
      title: 'Smart Portfolio UI Kit',
      desc: 'A responsive component system with motion and theme primitives.',
      img: 'https://images.unsplash.com/photo-1551281044-8b4e0e1abef9?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Creative Agency Site',
      desc: 'Next-gen landing with parallax, Spline, and immersive interactions.',
      img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Edu Platform Dashboard',
      desc: 'Analytics-first design with role-based UI and accessible charts.',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ];

  const achievements = [
    'Built and shipped multiple full‑stack web products with modern stacks',
    'Led small dev teams focusing on code quality and accessible design',
    'Consistent top performer in coursework and innovation challenges',
  ];

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Why creativity matters in engineering' },
    { id: 'bTqVqk7FSmY', title: 'UI motion basics for intuitive products' },
  ];

  const openVideo = (id) => {
    setVideo(id);
    dialogRef.current?.showModal();
  };
  const closeVideo = () => {
    dialogRef.current?.close();
    setVideo(null);
  };

  return (
    <div className="relative">
      {/* Projects & Achievements */}
      <section id="work" className="py-24 sm:py-28 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Projects & Achievements</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">A snapshot of work that blends code, creativity, and purpose.</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <a href={p.href} className="mt-4 inline-flex items-center gap-2 text-azure-700 dark:text-azure-300 hover:underline">
                    View Project <ExternalLink className="size-4" />
                  </a>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-azure-600/10 to-transparent" />
              </motion.article>
            ))}
          </div>

          {/* Achievements list */}
          <ul className="mt-8 grid md:grid-cols-3 gap-4">
            {achievements.map((a, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 text-sm text-slate-700 dark:text-slate-200"
              >
                {a}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dishan DeSEEKER on YouTube</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Subscribe for tech, creativity, and innovation.</p>
            </div>
            <a
              href="https://www.youtube.com/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-red-500 to-pink-500 px-5 py-2.5 text-white shadow-md hover:shadow-lg"
            >
              <Youtube className="size-4" /> Subscribe
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {videos.map((v) => (
              <article key={v.id} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60">
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={() => openVideo(v.id)}
                    className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg hover:scale-105 transition"
                  >
                    <Play className="size-6" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{v.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Video modal */}
        <dialog ref={dialogRef} className="rounded-xl p-0 backdrop:bg-black/60">
          {video && (
            <div className="w-[90vw] max-w-3xl">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-end p-3">
                <button onClick={closeVideo} className="rounded-md border border-slate-200 px-3 py-1.5 text-sm">Close</button>
              </div>
            </div>
          )}
        </dialog>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s build something great</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Share a bit about your idea and I’ll get back to you soon.</p>

              <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <p className="flex items-center gap-2"><Mail className="size-4 text-azure-500" /> contact@yourdomain.com</p>
                <div className="flex items-center gap-3 pt-2">
                  <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <Github className="size-5" />
                  </a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <Linkedin className="size-5" />
                  </a>
                  <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <Youtube className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form (front-end handling only) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                alert('Thanks! Your message has been prepared. Connect this form to a PHP endpoint to enable sending.');
              }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 ring-azure-400" />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 ring-azure-400" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
                  <textarea required rows={5} className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 ring-azure-400" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-azure-600 to-sky-500 px-5 py-2.5 text-white shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-azure-400/70 to-transparent" />
          <p className="mt-6 text-center text-sm text-slate-300">© 2025 Dishan De Silva | Crafted with code, creativity, and purpose.</p>
        </div>
      </footer>
    </div>
  );
}
