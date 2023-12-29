import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services//apiBookings";

function useDeleteBooking() {
  const queryClinet = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    // mutationFn: id=>deleteCabin(id),
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClinet.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}

export { useDeleteBooking };
