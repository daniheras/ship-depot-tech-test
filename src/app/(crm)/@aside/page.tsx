import { DashboardAside } from "../_components/aside/DashboardAside";
import { getMechanicCasesPerMonth, getMechanicTotalCases } from "../_server/chartsData";

export default async function Aside({
  searchParams,
}: {
  searchParams: Promise<{ mechanic?: string }>;
}) {
  const params = await searchParams;
  const mechanicId = params.mechanic;
  if (!mechanicId) return null;
  const mechanicTotalCases = await getMechanicTotalCases(mechanicId);
  const mechanicCasesPerMonth = await getMechanicCasesPerMonth(mechanicId);

  return <DashboardAside chartsData={{ mechanicTotalCases, mechanicCasesPerMonth  }} />;
}
