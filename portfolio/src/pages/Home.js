import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import Quotes from "../components/Quotes";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSkills />
      <Quotes />
      {/* <ProjectSection /> */}
    </div>
  );
}
