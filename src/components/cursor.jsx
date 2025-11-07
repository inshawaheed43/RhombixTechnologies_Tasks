import React, { useEffect, useRef } from "react";
import gsap from "gsap"
export default function Cursor() {
  const cursorRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const blur = blurRef.current;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(blur, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });

      gsap.to(blur, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);



  return (


    <div>
        <div id="cursor" ref={cursorRef} className="pointer-events-none"></div>
    <div id="cursor-blur" ref={blurRef} className="poniter-events-none"></div>
    </div>
  )
}
