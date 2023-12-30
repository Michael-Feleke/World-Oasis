import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        `Account successfully created! Please Verify the new account from the user's email address`
      );
    },
    onError: () =>
      toast.error(
        "Something went wrong during account creation. Please try again!"
      ),
  });

  return { signup, isSigningUp };
}

export { useSignup };
