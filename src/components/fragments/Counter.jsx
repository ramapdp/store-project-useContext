import React, { useState, useEffect } from "react";
import { motion, useSpring, animate } from "framer-motion";
import { formatNumber } from "@/helpers/formatNumber";

const Counter = (props) => {
  const { count = 0, title } = props;
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (!count) return;

    const controls = animate(0, count, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCurrentCount(Math.round(value)),
    });

    return () => controls.stop();
  }, [count]);

  return (
    <motion.div
      className="flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.p
        className="text-[40px] font-bold text-black"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {formatNumber(currentCount)}+
      </motion.p>
      <p className="text-base font-normal text-black opacity-60">{title}</p>
    </motion.div>
  );
};

export default Counter;
