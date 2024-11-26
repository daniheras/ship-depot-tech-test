'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { IconProps } from './types';

const pathVariants: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: { translateX: 1.1, translateY: -1.1 },
};

const DashboardIcon = ({ width = 24, height = 24 }: IconProps) => {
  const controls = useAnimation();

  return (
    <div
      className="select-none rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 15,
            bounce: 0.6,
          }}
          variants={pathVariants}
          animate={controls}
        />
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      </svg>
    </div>
  );
};

export { DashboardIcon };
