import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { DirectoryNav } from "@/components/ui/DirectoryNav";
import { navItems } from "@/data";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CinematicReveal } from "@/components/ui/CinematicReveal";
import { CinematicMarquee } from "@/components/ui/CinematicMarquee";
import Experience from "@/components/Experience";
import { Process } from "@/components/Process";
import Footer from "@/components/Footer";
import { AmbientMesh } from "@/components/ui/AmbientMesh";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <LoadingScreen />
      <AmbientMesh />
      <div className="max-w-7xl w-full relative z-10 pt-24">
        <DirectoryNav 
          navItems={navItems}
        />
        <Hero />
        
        <CinematicMarquee text="RUST • SOLIDITY • ZK-STARK • ICP • " speed={20} />
        
        <CinematicReveal delay={0.2}>
          <Grid />
        </CinematicReveal>
        
        <CinematicReveal delay={0.1}>
          <RecentProjects />
        </CinematicReveal>
        
        <CinematicReveal>
          <Clients />
        </CinematicReveal>
        
        <CinematicReveal>
          <Experience />
        </CinematicReveal>
        
        <CinematicReveal>
          <Process />
        </CinematicReveal>
        
        <CinematicReveal>
          <Footer />
        </CinematicReveal>
      </div>
    </main>
  );
}
 