import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user", user]);
      toast.success("Successfully loged in");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("provided email or password is incorrect");
    },
  });

  return { isLogin, login };
}

export { useLogin };
