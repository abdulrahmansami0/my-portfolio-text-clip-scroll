import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SomethingAboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef1 = useRef<SVGClipPathElement>(null);
  const clipRef2 = useRef<SVGClipPathElement>(null);
  const posterRef1 = useRef<HTMLDivElement>(null);
  const posterRef2 = useRef<HTMLDivElement>(null);
  const posterInnerRef1 = useRef<HTMLDivElement>(null);
  const posterInnerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clipPaths = [clipRef1.current, clipRef2.current];
    const posters = [posterRef1.current, posterRef2.current];
    const posterInners = [posterInnerRef1.current, posterInnerRef2.current];

    clipPaths.forEach((clipPathEl, pos) => {
      if (!clipPathEl || !posters[pos] || !posterInners[pos]) return;

      const texts = Array.from(clipPathEl.children) as SVGTextElement[];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: posters[pos],
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(
          clipPathEl,
          { xPercent: pos === 0 ? 0 : -100 },
          { ease: "none", xPercent: pos === 0 ? -100 : 0 },
          0
        )
        .fromTo(
          posters[pos],
          {
            filter: "brightness(200%)",
            skewX: pos === 0 ? -5 : 5,
          },
          {
            ease: "sine",
            filter: "brightness(15%)",
            skewX: pos === 0 ? 5 : -5,
          },
          0
        )
        .fromTo(
          posterInners[pos],
          { scale: 2.7 },
          { scale: 1 },
          0
        )
        .fromTo(
          texts,
          {
            transformOrigin: pos ? "50% 100%" : "50% 0%",
            scaleX: 0.8,
            scaleY: 0,
          },
          {
            duration: 0.2,
            stagger: pos ? -0.01 : 0.01,
            scaleX: 1,
            scaleY: 1,
          },
          0
        );
    });

    return () => ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
  }, []);

  return (
    <>
      <div className="content content--text">
        <h4>Something About Me</h4>
        <p>
          I'm Passionate software developer and UI/UX designer, I embark on a
          journey to create meaningful and impactful solutions that redefine the
          digital landscape, and I'm photographer also.
        </p>
      </div>
      <div className="content" ref={containerRef}>
        <svg>
          <clipPath id="clip-1" ref={clipRef1}>
            {"CreativeCreativedeveloper".split("").map((char, i) => (
              <text
                key={i}
                x={`${i}ch`}
                y="0.95em"
                className="line-1 font-1 size-3"
              >
                {char}
              </text>
            ))}
          </clipPath>
          <clipPath id="clip-1-1" ref={clipRef2}>
            {"Xogoxygenuxativedeveloper".split("").map((char, i) => (
              <text
                key={i}
                x={`${i}ch`}
                y="0.95em"
                className="line-2 font-1 size-3"
              >
                {char}
              </text>
            ))}
          </clipPath>
        </svg>
        <div
          className="poster poster--half"
          ref={posterRef1}
          style={{
            clipPath: "url(#clip-1)",
            "--offset-x": "10%",
            "--offset-y": "10%",
          } as React.CSSProperties}
        >
          <div
            className="poster__inner"
            ref={posterInnerRef1}
            style={{ backgroundImage: "url(/1625171990650.jpg)" }}
          />
        </div>
        <div
          className="poster poster--half"
          ref={posterRef2}
          style={{
            clipPath: "url(#clip-1-1)",
            "--offset-x": "10%",
            "--offset-y": "10%",
          } as React.CSSProperties}
        >
          <div
            className="poster__inner"
            ref={posterInnerRef2}
            style={{ backgroundImage: "url(/1669296138502.jpg)" }}
          />
        </div>
      </div>
    </>
  );
};

export default SomethingAboutMe;
