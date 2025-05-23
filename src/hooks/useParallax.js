import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Adds a scroll-based parallax effect to a ref.
 * @param {React.RefObject} ref - The element to animate.
 * @param {number} amount - The yPercent shift for parallax (default -30).
 */
export const useParallax = (ref, amount = -50) => {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );
};
