import { motion } from "framer-motion";

const BrandMarquee = ({ children }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-24 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;
