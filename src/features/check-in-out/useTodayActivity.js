import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivitys } from "../../services/apiBookings";

function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivitys,
    queryKey: ["today-activity"],
  });

  return { isLoading, activities };
}

export { useTodayActivity };
