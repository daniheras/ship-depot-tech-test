"use client";

import { motion } from "framer-motion";

const MechanicAvatar = () => {
  const variants = {
    expanded: {
      width: "48px",
    },
    collapsed: {
      width: "25px",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="collapsed"
      whileHover="expanded"
      className="left-0 relative"
    >
      <div className="w-12 h-12 bg-slate-500 border-white border-2 rounded-full relative z-30 cursor-pointer bg-contain" />
    </motion.div>
  );
};

export const MechanicsGap = () => {
  const variants = {
    expanded: {
      paddingRight: "40px",
      gap: "8px",
    },
    collapsed: {
      paddingRight: "40px",
      gap: 0,
    },
  };

  return (
    <>
      <div className="hidden lg:flex absolute w-min h-20 left-0 right-0 m-auto rounded-b-heavy bg-main">
        <motion.div
          initial="collapsed"
          whileHover="expanded"
          variants={variants}
          className={"h-full inline-flex flex-grow pl-5 items-center relative"}
        >
          {/* Gap content */}
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
          <MechanicAvatar />
        </motion.div>

        {/* Rounded corners */}
        {/* The arbitrary values are needed as theyre specifically tuned values */}
        <div
          className="absolute bg-main top-[-2px] h-[40px] w-[40px] left-[-39px]"
          style={{ clipPath: "url('#clipCornerLeft')" }}
        />
        <div
          className="absolute bg-main top-[-2px] h-[40px] w-[40px] right-[-39px]"
          style={{ clipPath: "url('#clipCornerRight')" }}
        />
      </div>

      {/* SVG needed for clip-path */}
      <svg className="absolute -left-full">
        {/* The defs element avoids the path to be directly rendered as we only want it to be referenced. */}
        <defs>
          <clipPath id="clipCornerRight">
            <path d="M0.499756 1H40.4998V1C18.2959 0.725877 0.225768 18.7961 0.499756 41V41V1Z" />
          </clipPath>
        </defs>
        <defs>
          <clipPath id="clipCornerLeft">
            <path d="M40 0.5H-3.8147e-06V0.5C22.2038 0.225877 40.274 18.2961 40 40.5V40.5V0.5Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};