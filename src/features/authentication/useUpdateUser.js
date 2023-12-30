import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User information updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => toast.error("Unable to update user information"),
  });

  return { isUpdating, updateUser };
}

export { useUpdateUser };
