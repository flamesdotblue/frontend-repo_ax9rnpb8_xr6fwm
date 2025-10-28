import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Download, Code, Palette, Users } from 'lucide-react';

// About + Skills focus: bio, quick stats, animated skill visuals
export default function About() {
  const skills = {
    'Web Development': [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'MySQL', level: 80 },
    ],
    'Design': [
      { name: 'UI/UX', level: 85 },
      { name: 'Responsive Layouts', level: 90 },
      { name: 'Creative Visual Design', level: 88 },
    ],
    'Soft Skills': [
      { name: 'Team Leadership', level: 85 },
      { name: 'Communication', level: 88 },
      { name: 'Problem Solving', level: 90 },
    ],
  };

  return (
    <section id="about" className="relative py-24 sm:py-28 bg-white dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-24 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.25),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Profile card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                {/* Placeholder image area */}
                <span className="text-slate-500 dark:text-slate-400">Add your photo</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Hey! I’m Dishan</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                I’m a 21-year-old Software Engineering undergraduate at Birmingham City University (BCU), studying through JIAT in Sri Lanka. I’m passionate about personal and professional growth — striving to excel as a software engineer while exploring my creativity and following my interests.
              </p>

              {/* Quick stats */}
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2"><Calendar className="size-4 text-azure-500" /> Age: 21</li>
                <li className="flex items-center gap-2"><GraduationCap className="size-4 text-azure-500" /> University: BCU (via JIAT)</li>
                <li className="flex items-center gap-2"><MapPin className="size-4 text-azure-500" /> Location: Sri Lanka</li>
                <li className="flex items-center gap-2"><Code className="size-4 text-azure-500" /> Specializations: Software Engineering, Web Dev, Design</li>
              </ul>

              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-azure-300/40 bg-white dark:bg-slate-800 px-4 py-2 text-azure-700 dark:text-azure-200 hover:bg-azure-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <Download className="size-4" /> Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-8">
            <h2 id="skills" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Skills & Tools</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A blend of engineering precision, visual storytelling, and people-first collaboration.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {/* Web Development */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold"><Code className="size-5 text-azure-500" /> Web Development</div>
                <div className="mt-4 space-y-4">
                  {skills['Web Development'].map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-azure-500 to-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold"><Palette className="size-5 text-azure-500" /> Design</div>
                <div className="mt-4 space-y-4">
                  {skills['Design'].map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-azure-500 to-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="sm:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold"><Users className="size-5 text-azure-500" /> Soft Skills</div>
                <div className="mt-4 grid sm:grid-cols-3 gap-4">
                  {skills['Soft Skills'].map((s) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-4 hover:shadow-lg hover:shadow-azure-500/10 transition-shadow"
                    >
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{s.name}</div>
                      <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Proficiency</div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-azure-400"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
