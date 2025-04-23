declare module 'gsap' {
  export const gsap: any;
}

declare module 'gsap/ScrollTrigger' {
  export const ScrollTrigger: any;
}

declare module 'imagesloaded' {
  const imagesLoaded: any;
  export default imagesLoaded;
}

declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      smoothWheel?: boolean;
      wheelMultiplier?: number;
    });
    raf(time: number): void;
    destroy(): void;
  }
} 