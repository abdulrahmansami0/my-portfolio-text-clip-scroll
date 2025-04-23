import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GreetingSection = () => {
  const clipRef = useRef<SVGClipPathElement>(null);
  const clipRef1 = useRef<SVGClipPathElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const posterRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // ⚠️ Always use gsap.set instead of inline styles
    if (clipRef.current) {
      gsap.set(clipRef.current, { x: "40%" });
    }
    if (clipRef1.current) {
      gsap.set(clipRef1.current, { x: "-80%" });
    }

    if (clipRef.current && posterRef.current) {
      gsap.to(clipRef.current, {
        x: "-40%",
        ease: "none",
        scrollTrigger: {
          trigger: posterRef.current,
          scrub: 0.1,
        },
      });
    }

    if (clipRef1.current && posterRef1.current) {
      gsap.to(clipRef1.current, {
        x: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: posterRef1.current,
          scrub: 0.1,
        },
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <>
      <header className="frame">
        <h1 className="frame__title">
          <span className="frame__title__first">Hi</span>
          <br />
          I'm Abdulrahman Sami
          <br />
          <span className="frame__title__second">
            Front End Developer & UI/UX Designer
          </span>
        </h1>
      </header>
      <div className="content">
        <svg>
          <clipPath id="clip" ref={clipRef}>
            {"Creative".split("").map((char, i) => (
              <text key={i} x={`${i}ch`} y="0.95em" className="font-1 size-3">
                {char}
              </text>
            ))}
          </clipPath>
          <clipPath id="clip-0" ref={clipRef1}>
            {"Creative".split("").map((char, i) => (
              <text key={i} x={`${i}ch`} y="0.95em" className="font-1 size-3">
                {char}
              </text>
            ))}
          </clipPath>
        </svg>
        <div
          className="poster poster--half"
          ref={posterRef}
          style={
            {
              clipPath: "url(#clip)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/kurdistan.jpg)" }}
          />
        </div>
        <div
          className="poster poster--half"
          ref={posterRef1}
          style={
            {
              clipPath: "url(#clip-0)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/neshtiman-man.jpg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default GreetingSection;
