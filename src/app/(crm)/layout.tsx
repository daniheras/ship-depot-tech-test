import { PropsWithChildren } from "react";
import { Header } from "./_components/Header";

const MechanicsGap = () => {
  return (
    <>
      <div className="hidden lg:block absolute w-[200px] h-[80px] bg-black left-0 right-0 m-auto rounded-bl-[40px] rounded-br-[40px] bg-main">
        <div className="absolute bg-main top-[-2px] h-[40px] w-[40px] left-[-39px]" style={{ clipPath: "url('#clipCornerLeft')" }}/>
        <div className="absolute bg-main top-[-2px] h-[40px] w-[40px] right-[-39px]" style={{ clipPath: "url('#clipCornerRight')" }}/>
      </div>

      {/* SVG needed for clip-path */}
      <svg className="absolute -left-full">
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

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex flex-col md:pb-5 md:gap-5">
      <Header />
      <div className="md:px-5 flex flex-col flex-grow">
        <main className="bg-timberwolf-800 dark:bg-walnut_brown-500 md:rounded-3xl flex-grow relative">
          <MechanicsGap />
          {children}
        </main>
      </div>
    </div>
  );
}
