import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";

type Props = {};
const Row2 = (props: Props) => {
  const { data } = useGetProductsQuery();
  console.log(useGetProductsQuery());
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};
export default Row2;
