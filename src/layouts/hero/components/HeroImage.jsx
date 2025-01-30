import { motion } from "framer-motion";
import ImageHero from "@assets/images/hero.png";
import Springkle from "@assets/images/springkle.svg";
import {
  SPRINGKLE_ANIMATIONS,
} from "@layouts/hero/constants/hero.constants";

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

export default HeroImage;
