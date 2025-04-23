import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Communication = () => {
  const clipRef = useRef<SVGClipPathElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clipRef.current || !posterRef.current) return;

    const clipPath = clipRef.current;
    const poster = posterRef.current;
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
          xPercent: 20,
        },
        {
          xPercent: -70,
          ease: "none",
        },
        0
      )
      .fromTo(
        texts,
        {
          transformOrigin: "150% 50%",
          scaleX: 0.25,
          opacity: 0,
          xPercent: 100,
        },
        {
          duration: 0.15,
          ease: "power1",
          stagger: 0.05,
          scaleX: 1,
          xPercent: 0,
          opacity: 1,
        },
        0
      )
      .fromTo(
        poster,
        {
          filter: "saturate(15)",
        },
        {
          filter: "saturate(0)",
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
        <h4>Real-time Communication</h4>
        <p>
          I integrate messaging systems like WhatsApp and Telegram to deliver
          seamless real-time user interactions. Whether it's caller management
          or live dashboards, I bring data to life in real time.
        </p>
      </div>
      <div className="content">
        <svg>
          <clipPath id="clip-5" ref={clipRef}>
            {"byosox".split("").map((char, i) => (
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
              clipPath: "url(#clip-5)",
              filter: "saturate(0.3)",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner poster__inner--fixed"
            style={{
              backgroundImage: "url(/1625171990615.jpg)",
              filter: "saturate(0.3)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Communication;
