import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("Successfully loged in");
      navigate("/");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("provided email or password is incorrect");
    },
  });

  return { isLogin, login };
}

export { useLogin };
