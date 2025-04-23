import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolveProblem = () => {
  const clipRef = useRef<SVGClipPathElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const posterInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clipRef.current || !posterRef.current || !posterInnerRef.current)
      return;

    const clipPath = clipRef.current;
    const poster = posterRef.current;
    const posterInner = posterInnerRef.current;
    const texts = Array.from(clipPath.children) as SVGTextElement[];

    const imageUrls = ["/power-sun.jpg", "/moon.jpg", "/tree-light.jpg"];
    let currentIndex = 0;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: poster,
          start: "top bottom",
          end: "bottom top+=25%",
          scrub: true,
          onUpdate: (scrollTrigger) => {
            const progress = scrollTrigger.progress;
            const sectionLength = 1 / imageUrls.length;
            const index = Math.floor(progress / sectionLength);
            const imageUrl = imageUrls[Math.min(index, imageUrls.length - 1)];

            if (index !== currentIndex) {
              currentIndex = index;

              gsap.killTweensOf(posterInner);
              gsap.timeline().fromTo(
                posterInner,
                { filter: "brightness(100%)" },
                {
                  duration: 0.3,
                  ease: "sine.in",
                  filter: "brightness(0%)",
                  onComplete: () => {
                    posterInner.style.backgroundImage = `url(${imageUrl})`;
                    gsap.to(posterInner, {
                      duration: 1,
                      ease: "power1",
                      filter: "brightness(100%)",
                    });
                  },
                }
              );
            }
          },
        },
      })
      .fromTo(clipPath, { xPercent: 90 }, { xPercent: -120, ease: "none" }, 0)
      .fromTo(
        texts,
        {
          transformOrigin: "100% 75%",
          xPercent: 100,
          rotation: 10,
        },
        {
          duration: 0.02,
          stagger: 0.05,
          xPercent: 0,
          rotation: 0,
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
        <h4>Solve your Problem with Code</h4>
        <p>
          "A skilled Creative Developer blending ingenious code and intuitive
          design to craft exceptional products. Passionate about leveraging AI's
          potential to drive innovation and elevate user experiences."
        </p>
      </div>
      <div className="content">
        <svg>
          <clipPath id="clip-2" ref={clipRef}>
            {"Developerart".split("").map((char, i) => (
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
          style={{ clipPath: "url(#clip-2)" } as React.CSSProperties}
        >
          <div
            className="poster__inner"
            ref={posterInnerRef}
            style={{ backgroundImage: "url(/power-sun.jpg)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SolveProblem;
