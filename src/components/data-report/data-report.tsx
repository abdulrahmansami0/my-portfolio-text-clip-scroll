import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DataReport = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<SVGClipPathElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !clipRef.current || !posterRef.current) return;

    const container = containerRef.current;
    const clipPath = clipRef.current;
    const texts = Array.from(clipPath.children) as SVGTextElement[];

    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: posterRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        container,
        {
          filter: "drop-shadow(-100px -20px 5px orange)",
        },
        {
          filter: "drop-shadow(100px 20px 20px purple)",
        },
        0
      )
      .fromTo(
        clipPath,
        {
          xPercent: 140,
        },
        {
          xPercent: -140,
        },
        0
      )
      .fromTo(
        texts,
        {
          transformOrigin: "0% 50%",
          rotation: -45,
          scale: 0,
          opacity: 0,
        },
        {
          duration: 0.1,
          ease: "expo.inOut",
          stagger: 0.03,
          rotation: 0,
          scale: 1,
          xPercent: 0,
          opacity: 1,
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="content content--text">
        <h4>Data & Reports</h4>
        <p>
          I build systems that transform data into actionable insights. Using
          tools like Excel parsing, Facebook API integration, and rich text
          reporting, I enable teams to track, analyze, and act faster.
        </p>
      </div>
      <div className="content" ref={containerRef} id="here">
        <svg>
          <clipPath id="clip-6" ref={clipRef}>
            {"kelpforest".split("").map((char, i) => (
              <text
                key={i}
                x={`${i}ch`}
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-1 size-3"
              >
                {char}
              </text>
            ))}
          </clipPath>
        </svg>
        <div
          className="poster"
          ref={posterRef}
          style={{ clipPath: "url(#clip-6)" } as React.CSSProperties}
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/1625171990650.jpg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default DataReport;
