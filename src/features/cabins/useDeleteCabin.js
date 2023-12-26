import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

function useDeleteCabin() {
  const queryClinet = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: id=>deleteCabin(id),
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClinet.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}

export { useDeleteCabin };
