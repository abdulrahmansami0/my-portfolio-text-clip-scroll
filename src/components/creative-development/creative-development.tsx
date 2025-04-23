import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeDevelopment = () => {
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
        scrollTrigger: {
          trigger: poster,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        clipPath,
        {
          xPercent: 260,
        },
        {
          ease: "none",
          xPercent: -160,
        },
        0
      )
      .fromTo(
        posterInner,
        {
          xPercent: -10,
        },
        {
          xPercent: 10,
        },
        0
      )
      .fromTo(
        texts,
        {
          transformOrigin: "50% 100%",
          scaleY: 0,
        },
        {
          duration: 0.3,
          ease: "expo.inOut",
          stagger: 0.05,
          scaleY: 1,
        },
        0
      )
      .fromTo(
        texts,
        {
          skewX: -25,
        },
        {
          duration: 0.3,
          ease: "sine.in",
          stagger: 0.05,
          skewX: 25,
          opacity: 0,
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
        <h4>Creative Development</h4>
        <p>
          I merge art and engineering to build dynamic web applications that are
          both beautiful and functional. From idea to interface, I believe in
          crafting digital experiences that feel intuitive and inspiring.
        </p>
      </div>
      <div className="content">
        <svg>
          <clipPath id="clip-3" ref={clipRef}>
            {"Fitness".split("").map((char, i) => (
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
          style={
            {
              clipPath: "url(#clip-3)",
              "--offset-x": "20%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            ref={posterInnerRef}
            style={{ backgroundImage: "url(/moon.jpg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default CreativeDevelopment;
