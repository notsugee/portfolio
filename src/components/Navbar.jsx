import { useRef, forwardRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = forwardRef((props, ref) => {
  const navRef = useRef();
  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: "-50%",
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
  });
  return (
    <div
      ref={(el) => {
        navRef.current = el;
        if (typeof ref === "function") {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      }}
      className="z-50 flex w-full items-center justify-between p-4"
    >
      <div>
        <h3 className="font-gsbold text-3xl">sujith</h3>
      </div>
      <div>
        <h3 className="font-gsmedium">menu</h3>
      </div>
    </div>
  );
});

export default Navbar;
