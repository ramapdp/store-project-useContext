import { motion } from "framer-motion";
import Counter from "@components/counter/Counter";
import {
  HERO_COUNTERS,
  HERO_ANIMATION,
} from "@layouts/hero/constants/hero.constants";

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

export default CounterSection;
