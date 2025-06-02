import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Home = () => {
  const navbarRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: aboutRef.current,
        autoKill: false,
      },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="overflow-hidden">
      {/* <Navbar ref={navbarRef} /> */}
      <Hero ref={heroRef} onAboutClick={scrollToAbout} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default Home;
