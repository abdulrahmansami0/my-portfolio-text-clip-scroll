declare module 'imagesloaded' {
  function imagesLoaded(
    elements: Element | Element[] | NodeList | string,
    callback?: () => void
  ): any;
  
  export default imagesLoaded;
} 