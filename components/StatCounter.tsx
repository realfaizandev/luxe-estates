import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ value, label, prefix = "", suffix = "", duration = 2 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-serif font-bold text-accent mb-2"
      >
        {prefix}{count}{suffix}
      </motion.div>
      <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
