export const Avatar = ({ img }: { img?: string }) => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      className="w-12 h-12 bg-slate-500 border-white border-2 rounded-full relative z-30 cursor-pointer bg-contain"
    />
  );
};
