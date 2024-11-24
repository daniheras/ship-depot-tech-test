import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative mx-auto w-full max-w-[24rem] rounded-xl overflow-hidden shadow-sm dark:border dark:border-taupe-200">
          <div className="relative flex flex-col bg-white dark:bg-taupe-300">
          {children}
          </div>
        </div>
      </div>
    </>
  );
};
