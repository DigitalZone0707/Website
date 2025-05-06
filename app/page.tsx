import MainNavbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/Features";
import ProjectSection from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <MainNavbar />
      <HeroSection />
      <FeaturesSection />
      <ProjectSection />
      <Community />
      <Footer/>
    </div>
  );
}
