"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * ScrollReveal Component - Beautiful scroll-based animations
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.variant - Animation type: "fadeUp", "fadeIn", "slideLeft", "slideRight", "scaleIn", "fadeUpStagger"
 * @param {number} props.delay - Delay before animation starts (seconds)
 * @param {number} props.duration - Animation duration (seconds)
 * @param {boolean} props.once - Whether animation should only occur once
 * @param {number} props.amount - Amount of element visible before triggering (0-1)
 * @param {string} props.className - Additional CSS classes
 */
export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  staggerChildren = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: "-50px",
  });

  const variants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 60,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    },
    slideLeft: {
      hidden: {
        opacity: 0,
        x: -80,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
    slideRight: {
      hidden: {
        opacity: 0,
        x: 80,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
    fadeUpStagger: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren: delay,
        },
      },
    },
    staggerChild: {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealItem - For use within fadeUpStagger parent
 */
export function ScrollRevealItem({ children, className = "" }) {
  return (
    <motion.div variants={{
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    }} className={className}>
      {children}
    </motion.div>
  );
}
