import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createCabinApi,
    onSuccess: () => {
      toast.success("Cabin created successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}

export { useCreateCabin };
