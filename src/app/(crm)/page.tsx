import { CasesWrapper } from './cases/components/CasesWrapper';

export default function Dashboard() {
  return (
    <>
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 ">
        Top Left
      </div>
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 ">
        Bottom Left
      </div>
      <CasesWrapper/>
    </>
  );
}
