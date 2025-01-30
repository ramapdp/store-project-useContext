import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HERO_ANIMATION,
} from "@layouts/hero/constants/hero.constants";

const CTAButton = () => (
  <motion.div {...HERO_ANIMATION} transition={{ duration: 0.5, delay: 0.4 }}>
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

export default CTAButton;
