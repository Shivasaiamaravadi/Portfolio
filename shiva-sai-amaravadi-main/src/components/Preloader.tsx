

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [frame, setFrame] = useState(0);

  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  // Predefined frames like your example
  const frames = [
    [0, 1, 2, 3, 4],      // LOADI--
    [1, 2, 3, 4, 5],      // -OADIN-
    [2, 3, 4, 5, 6],      // --ADING
    [0, 1, 3, 4, 5],      // LO-DIN-
    [1, 2, 4, 5, 6],      // -OA-ING
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 400);

    const timer = setTimeout(() => {
      setIsComplete(true);
      clearInterval(interval);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, frames.length]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
        >
          <div className="flex space-x-2 text-6xl md:text-8xl font-display font-bold text-gray-200">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                animate={{
                  opacity: frames[frame].includes(index) ? 1 : 0.1,
                }}
                transition={{ duration: 0.25 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
