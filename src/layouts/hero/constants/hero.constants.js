export const HERO_COUNTERS = [
  { count: 200, title: "International Brands" },
  { count: 2000, title: "High-Quality Products" },
  { count: 30000, title: "Happy Customers" },
];

export const HERO_ANIMATION = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const SPRINGKLE_ANIMATIONS = {
  top: {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 10, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  bottom: {
    animate: {
      y: [0, 20, 0],
      rotate: [0, -10, 0],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
