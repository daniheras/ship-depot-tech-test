export const StickyNote = () => {
  return (
    <div
      className="hidden absolute w-[200px] h-[200px] top-5 right-5 bg-cover text-gray-900 sm:flex items-center justify-center bg-no-repeat"
      style={{ backgroundImage: "url('/sticky_note.svg')" }}
    >
      <div className="text-xs flex flex-col gap-2">
        <div>
          <p className="underline">Admin</p>
          <p>
            <span>admin@test.com</span>
          </p>
          <p>
            <span>admin</span>
          </p>
        </div>
        <div>
          <p className="underline">Mechanic</p>
          <p>
            <span>johndoe@test.com</span>
          </p>
          <p>
            <span>admin</span>
          </p>
        </div>
      </div>
    </div>
  );
};
