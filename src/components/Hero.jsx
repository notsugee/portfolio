import { useRef } from "react";
import { useParallax } from "../hooks/useParallax";
import gsap from "gsap";

const Hero = () => {
  const vidRef = useRef(null);
  const bigtextRef = useRef(null);
  const historyRef = useRef(null);
  const plusRef = useRef(null);
  const arrowRef = useRef(null);
  const arrowTextRef = useRef(null);

  useParallax(bigtextRef, -100);
  useParallax(vidRef, -100);
  useParallax(historyRef, -50);
  useParallax(plusRef, -1000);

  const handleMouseEnter = () => {
    gsap.fromTo(
      arrowRef.current,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.5,
        color: "#000",
        ease: "circ.out",
      }
    );
    gsap.to(arrowTextRef.current, {
      color: "#000",
      duration: 0.5,
      ease: "circ.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(arrowRef.current, {
      y: "100%",
      duration: 0.5,
      color: "#DDDDDD",
      ease: "circ.out",
    });
    gsap.to(arrowTextRef.current, {
      color: "#DDDDDD",
      duration: 0.5,
      ease: "circ.out",
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="h-[80vh] overflow-hidden rounded-full">
        <video
          ref={vidRef}
          autoPlay
          loop
          muted
          src="/media/video.mp4"
          className="scale-x-[-1] object-cover rounded-full w-full h-full transform translate-y-67"
        ></video>
      </div>
      <div>
        <div
          ref={plusRef}
          className="absolute flex gap-8 top-24 left-16 transform translate-y-[1000%]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div className="absolute flex gap-8 top-36 left-16">
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 13V0M13 6.5H0H13Z"
              stroke="#DDDDDD"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </div>
      <div className="absolute w-4xl transform -translate-x-1/2 -translate-y-1/4">
        <h1 className="font-gsmedium tracking-tight leading-25 text-9xl w-full select-none">
          Code that flows. Design that speaks.
        </h1>
      </div>
      <div
        ref={historyRef}
        className="absolute bottom-0 left-0 mb-25 pl-14 max-w-xl"
      >
        <h2 className="font-gsmedium text-5xl mb-5">2023</h2>
        <p className="font-gsmedium text-lg leading-6">
          Began my journey into web development and design. Started turning
          curiosity into code, and sketches into systems. Still leveling up,
          still lighting the fire.
        </p>
      </div>
      <div className="absolute right-0 h-full w-[33vw] p-4">
        <nav className="flex flex-row justify-between pt-17 pr-12">
          <div className="flex flex-col">
            <a href="#" className="font-gsmedium text-lg">
              Main
            </a>
            <a href="#" className="font-gsmedium text-lg">
              Projects
            </a>
            <a href="#" className="font-gsmedium text-lg">
              About
            </a>
            <a href="#" className="font-gsmedium text-lg">
              Contact
            </a>
          </div>
          <div>
            <h3 className="font-haasregular select-none uppercase tracking-widest text-xl">
              Sujith
            </h3>
          </div>
        </nav>
        <div className="absolute bottom-2/5">
          <h2 className="font-gsmedium text-6xl">
            frontend <span>&mdash;</span> backend
          </h2>
        </div>
        <div className="flex items-center justify-between absolute bottom-0 mb-30 w-md pr-4">
          <div>
            <p className="font-gsmedium text-lg leading-6">
              Chennai,
              <br />
              India
            </p>
            <p className="text-[#565756]">Explore Projects.</p>
          </div>
          <div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="overflow-hidden cursor-pointer relative h-[70px] w-[70px] flex justify-center items-center border-1 rounded-full border-white"
            >
              <div
                ref={arrowRef}
                className="absolute bg-[#DDDDDD] h-full w-full transform translate-y-full"
              ></div>
              <p
                ref={arrowTextRef}
                className="text-5xl font-thin z-10 select-none"
              >
                ↓
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
