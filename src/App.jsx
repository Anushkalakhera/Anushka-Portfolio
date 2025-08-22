
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import FooterMain from './components/footer/FooterMain';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import { NavbarMain } from './components/navbar/NavbarMain';
import ProjectsMain from './components/projectsSection.jsx/ProjectsMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';

function App() {
  return <main className="font-body w-full max-w-[1800px] mx-auto px-2 sm:px-4 md:px-8 lg:px-12 overflow-x-hidden">
  <NavbarMain />
  <HeroMain />
  <HeroGradient />
  <SubHeroSection />
  <AboutMeMain />
  <SkillsMain />
  <SubSkills />
  <ExperienceMain />
  <ProjectsMain />
  <ContactMeMain />
  <FooterMain />
</main>

  
}

export default App
