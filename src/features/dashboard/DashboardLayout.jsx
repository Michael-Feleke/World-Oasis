import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecetnBookings } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecetnBookings();

  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>stat</div>
      <div>Act</div>
      <div>Chart</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
