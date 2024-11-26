'use client';

import type { Transition } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { IconProps } from './types';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const ExpandIcon = ({ width = 24, height = 24 }: IconProps) => {
  const controls = useAnimation();

  return (
    <div
      className="select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '2px', translateY: '2px' },
          }}
          animate={controls}
        />
        <motion.path
          d="M3 16.2V21m0 0h4.8M3 21l6-6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '-2px', translateY: '2px' },
          }}
          animate={controls}
        />
        <motion.path
          d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '2px', translateY: '-2px' },
          }}
          animate={controls}
        />
        <motion.path
          d="M3 7.8V3m0 0h4.8M3 3l6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '-2px', translateY: '-2px' },
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { ExpandIcon };
