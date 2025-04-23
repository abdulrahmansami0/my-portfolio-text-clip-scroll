declare module 'gsap' {
  export const gsap: {
    fromTo: (target: HTMLElement, fromVars: object, toVars: object) => any;
    from: (target: HTMLElement, vars: object) => any;
    registerPlugin: (plugin: any) => void;
  };
}

declare module 'gsap/ScrollTrigger' {
  export class ScrollTrigger {
    static getAll(): ScrollTrigger[];
    kill(): void;
  }
} 