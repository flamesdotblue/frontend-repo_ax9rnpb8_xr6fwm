import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Engage from './components/Engage';

// Root application layout (one-page, scroll-based navigation)
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-azure-300/30 selection:text-slate-900 scroll-smooth">
      {/* Top navigation with theme toggle */}
      <Navbar />

      {/* Hero with Spline, parallax and magnetic CTA */}
      <Hero />

      {/* About + Skills section */}
      <About />

      {/* Work, YouTube, Contact, Footer */}
      <Engage />
    </div>
  );
}
