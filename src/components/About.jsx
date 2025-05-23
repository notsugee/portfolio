import { useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useParallax } from "../hooks/useParallax";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = forwardRef((props, ref) => {
  const aboutRef = useRef();
  const nameRef = useRef();
  const paragraphText = useRef();

  //   useParallax(statementText, -30);
  useParallax(paragraphText, -10);

  useGSAP(() => {
    const split = new SplitText(paragraphText.current, {
      type: "lines, words",
    });
    gsap.from(aboutRef.current, {
      scale: 0.7,
      borderRadius: "50%",
      ease: "ease.inOut",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 90%",
        end: "top 13%",
        scrub: true,
        markers: false,
      },
    });
    gsap.from(split.lines, {
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "top top",
        scrub: true,
        markers: false,
      },
    });

    gsap.from(nameRef.current, {
      opacity: 0,
      y: "50%",
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 80%",
        end: "top top",
        scrub: true,
        markers: false,
      },
    });
  });
  return (
    <div ref={ref} className="relative h-[100vh]">
      <div ref={aboutRef} className="bg-[#000] h-full">
        <div className="relative flex flex-col h-full w-full">
          {/* <div className="absolute flex gap-8 top-56 ml-24">
            <div className="flex flex-col gap-4 justify-evenly grow">
              <div className="h-12 w-12 bg-red-600"></div>
              <div className="h-12 w-12 bg-red-600"></div>
              <div className="h-12 w-12 bg-red-600"></div>
            </div>
            <h2
              ref={statementText}
              className="font-gsbold text-8xl text-right select-none"
            >
              building <br />
              lines of
              <br /> logic.
            </h2>
          </div> */}
          <div className="flex items-center justify-center h-full">
            <p
              ref={paragraphText}
              className="font-gsmedium text-9xl px-8 pt-4 w-full"
            >
              I build thoughtful digital products that simplify lives, spark
              curiosity, and connect ideas to people through logic, design, and
              code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
