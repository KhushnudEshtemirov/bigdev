import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

export function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_0%,rgba(155,109,255,0.06),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(92,141,240,0.05),transparent_40%)] bg-console-bg font-sans text-console-text">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
