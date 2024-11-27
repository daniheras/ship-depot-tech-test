"use client";

import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { motion } from "framer-motion";
import { useMechanicsContext } from "../_context/mechanics/useMechanicsContext";
import { cn } from "@/app/_shared/utils";
import { Mechanic } from "../_server/schema";
import { useRouter } from "next/navigation";

const MechanicAvatar = (data: Mechanic) => {
  const { push } = useRouter();
  const { selectedMechanic, setSelectedMechanic } = useMechanicsContext();

  const variants = {
    expanded: {
      width: "48px",
    },
    collapsed: {
      width: "25px",
    },
  };

  const handleAvatarClicked = () => {
    const params = new URLSearchParams(window.location.search);
    if (selectedMechanic === data.id) {
      setSelectedMechanic(null);

      params.delete("mechanic");
      push(`?${params.toString()}`);
      return;
    }
    setSelectedMechanic(data.id);

    params.delete("page");
    params.set("mechanic", data.id.toString());
    push(`?${params.toString()}`);
  };

  return (
    <motion.div
      variants={variants}
      initial="collapsed"
      whileHover="expanded"
      className="left-0 relative z-50"
      onClick={handleAvatarClicked}
    >
      <Avatar
        className={cn(
          selectedMechanic === data.id &&
            "dark:border-accent-400 border-accent-400 border-4"
        )}
        img={data.image}
      />
    </motion.div>
  );
};

export const MechanicsGap = () => {
  const { mechanics } = useMechanicsContext();

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
          {mechanics.map((mechanic) => (
            <MechanicAvatar {...mechanic} key={mechanic.id} />
          ))}
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
