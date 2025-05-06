import MainNavbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex max-w-7xl flex-col items-center justify-center">
      <MainNavbar />
      <Hero />
      <About />
      <Projects />
      <Community />
      <Footer/>
    </div>
  );
}
