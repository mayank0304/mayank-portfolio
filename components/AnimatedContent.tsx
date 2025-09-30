"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface AnimatedContentProps {
  children: React.ReactNode;
}

const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="tab-content"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedContent;
