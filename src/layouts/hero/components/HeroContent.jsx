import { motion } from "framer-motion";
import {
  HERO_ANIMATION,
} from "@layouts/hero/constants/hero.constants";
import CTAButton from "@layouts/hero/components/CTAButton";
import CounterSection from "@layouts/hero/components/CounterSection";

const HeroContent = () => (
  <div className="flex flex-col gap-5">
    <motion.h1
      className="text-color-red text-[64px]"
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
      designed to bring out your individuality and cater to your sense of style.
    </motion.p>

    <CTAButton />
    <CounterSection />
  </div>
);

export default HeroContent;