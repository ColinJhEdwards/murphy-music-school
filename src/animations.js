export const pageAnimation = {
  //hidden is the initial start of the animation
  hidden: {
    opacity: 0,
  },
  //Show is what the end of the animation will be
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      //Adding then when will cause this to animate before any children elements, then those children elements will animate
      when: "beforeChildren",
      // the duration between each delayed children
      staggerChildren: 0.25,
    },
  },
  //Exit settings activate when leaving a component, such as going to a new page
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const width = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const ySlide = {
  hidden: { y: "150%" },
  show: {
    y: "0%",

    transition: { duration: 1, delay: 0.5 },
  },
};

export const xSlide = {
  hidden: { x: "150%" },
  show: {
    x: "0%",

    transition: { duration: 1, delay: 0.5 },
  },
};

export const grow = {
  hidden: { scale: 0 },
  show: {
    scale: 1,

    transition: { duration: 0.5 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 0.5 },
  },
};

export const noDelayFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 1, delay: 0.5 },
  },
};

export const shortFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 0.2 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
