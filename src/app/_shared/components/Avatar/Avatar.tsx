import { cn } from "../../utils";

export const Avatar = ({ img, className }: { img?: string, className?: string }) => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      className={
        cn("w-12 h-12 bg-taupe-200 border-white border-2 rounded-full relative z-30 cursor-pointer bg-cover bg-no-repeat", className)
      }
    />
  );
};
