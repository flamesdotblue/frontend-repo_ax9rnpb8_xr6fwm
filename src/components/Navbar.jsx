import { useEffect, useState } from 'react';
import { Moon, Sun, Github, Linkedin, Youtube } from 'lucide-react';

// Navbar with brand, section links, and theme toggle
export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Persist theme and apply Tailwind's `dark` class to the <html> element
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    const isDark = stored === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm md:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-azure-600 dark:hover:text-azure-300 transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-to-tr from-azure-500 to-sky-400 shadow-lg shadow-azure-500/30" />
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Dishan De Silva</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            <LinkItem href="#about" label="About" />
            <LinkItem href="#skills" label="Skills" />
            <LinkItem href="#work" label="Work" />
            <LinkItem href="#contact" label="Contact" />

            {/* Socials */}
            <div className="mx-2 h-6 w-px bg-slate-300 dark:bg-slate-700" />
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              <Github className="size-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              <Youtube className="size-5" />
            </a>

            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="ml-2 inline-flex items-center justify-center rounded-md border border-slate-300/60 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 px-2.5 py-2 transition-colors"
            >
              {dark ? <Sun className="size-4 text-amber-300" /> : <Moon className="size-4 text-slate-700" />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setOpen((s) => !s)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300/60 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            <span className="sr-only">Toggle menu</span>
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <LinkItem href="#about" label="About" />
            <LinkItem href="#skills" label="Skills" />
            <LinkItem href="#work" label="Work" />
            <LinkItem href="#contact" label="Contact" />
            <div className="flex items-center gap-2 pt-2">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-md border border-slate-300/60 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 px-3 py-2 transition-colors"
              >
                {dark ? (
                  <span className="flex items-center gap-2 text-amber-300"><Sun className="size-4" /> Light</span>
                ) : (
                  <span className="flex items-center gap-2 text-slate-700"><Moon className="size-4" /> Dark</span>
                )}
              </button>

              <div className="ml-auto flex items-center gap-1">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                  <Github className="size-5" />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                  <Linkedin className="size-5" />
                </a>
                <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                  <Youtube className="size-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
