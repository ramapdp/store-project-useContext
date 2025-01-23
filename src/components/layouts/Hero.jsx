import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Counter from "@components/fragments/Counter";
import ImageHero from "@/assets/images/hero.png";
import Springkle from "@/assets/images/springkle.svg";
import { HERO_COUNTERS, HERO_ANIMATION, SPRINGKLE_ANIMATIONS } from "@/constants/hero.constants";

const HeroContent = () => (
  <div className="flex flex-col gap-5">
    <motion.h1
      className="text-[#ff0000] text-[64px]"
      {...HERO_ANIMATION}
      transition={{ duration: 0.8 }}
    >
      FIND CLOTHES THAT MATCHES YOUR STYLE
    </motion.h1>
    
    <motion.p
      className="text-black opacity-60 text-base font-normal"
      {...HERO_ANIMATION}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense
      of style.
    </motion.p>

    <ShopNowButton />
    <CounterSection />
  </div>
);

const ShopNowButton = () => (
  <motion.div
    {...HERO_ANIMATION}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Link
      to="products"
      className="group bg-black px-12 py-2 text-white text-center rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out inline-flex items-center"
    >
      Shop Now
      <svg
        className="w-0 h-5 ml-0 group-hover:w-4 group-hover:ml-2 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  </motion.div>
);

const CounterSection = () => (
  <motion.div
    className="flex gap-12 mt-8"
    {...HERO_ANIMATION}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    {HERO_COUNTERS.map((item, index) => (
      <Counter key={index} count={item.count} title={item.title} />
    ))}
  </motion.div>
);

const HeroImage = () => (
  <motion.div className="relative flex h-full w-1/2">
    <motion.img
      src={Springkle}
      alt="Sprinkle Top"
      className="absolute top-32 right-0 z-0 scale-150"
      {...SPRINGKLE_ANIMATIONS.top}
    />
    <motion.img
      src={Springkle}
      alt="Sprinkle Bottom"
      className="absolute top-72 left-10 z-0 scale-90"
      {...SPRINGKLE_ANIMATIONS.bottom}
    />
    <motion.img
      src={ImageHero}
      alt="Hero Image"
      className="object-cover w-full h-full"
    />
  </motion.div>
);

const Hero = () => {
  return (
    <section className="bg-[#F0F0F0] h-screen -mt-16 flex justify-center">
      <div className="flex mt-16 flex-1 justify-between mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-full w-1/2 px-2 my-auto items-center justify-start">
          <HeroContent />
        </div>
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
