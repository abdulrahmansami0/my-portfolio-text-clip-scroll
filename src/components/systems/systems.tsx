import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Systems = () => {
  const clipRef = useRef<SVGClipPathElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const posterInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clipRef.current || !posterRef.current || !posterInnerRef.current) return;

    const clipPath = clipRef.current;
    const poster = posterRef.current;
    const posterInner = posterInnerRef.current;
    const texts = Array.from(clipPath.children) as SVGTextElement[];

    gsap
      .timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: poster,
          start: "top bottom-=20%",
          end: "bottom top-=100%",
          scrub: true,
        },
      })
      .fromTo(
        clipPath,
        { xPercent: 160 },
        { xPercent: -160 },
        0
      )
      .fromTo(
        poster,
        {
          transformOrigin: "-50% 50%",
          rotation: -5,
        },
        {
          rotation: 10,
        },
        0
      )
      .fromTo(
        posterInner,
        { scale: 3 },
        { scale: 1 },
        0
      )
      .fromTo(
        texts,
        {
          transformOrigin: "0% 50%",
          rotation: -45,
          yPercent: -10,
          scale: 0.1,
        },
        {
          duration: 0.3,
          ease: "power1",
          stagger: 0.05,
          rotation: 0,
          scale: 1,
          yPercent: 0,
          xPercent: 0,
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
        <h4>Map Systems & Visualization</h4>
        <p>
          Specialized in interactive map solutions using Mapbox, I design
          geographic systems with custom polygon drawing, multi-level data
          storage, and advanced spatial filtering, powering real-world
          decision-making.
        </p>
      </div>
      <div className="content">
        <svg>
          <clipPath id="clip-4" ref={clipRef}>
            {"software".split("").map((char, i) => (
              <text
                key={i}
                x={`${i}ch`}
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-1 size-2"
              >
                {char}
              </text>
            ))}
          </clipPath>
        </svg>
        <div
          className="poster"
          ref={posterRef}
          style={{ clipPath: "url(#clip-4)" } as React.CSSProperties}
        >
          <div
            className="poster__inner"
            ref={posterInnerRef}
            style={{ backgroundImage: "url(/neshtiman-man.jpg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Systems;
