export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow flex flex-col">
      <h3 className="dark:text-gray-400 text-gray-700 font-semibold text-xl mb-4">
        Repair Cases
      </h3>
      { children }
    </main>
  );
}