"use client";
import SignIn from "components/Login/SignIn";
import { useRouter } from "next/navigation";
import { authService } from "services/firebase";

const Login = () => {

    const router = useRouter();

    const handleLogin = async (email, password) => {
    try {
      const result = await authService.signIn(email, password);
      router.push("/dashboard/my-dashboard")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <SignIn
      onSignInClicked={(value) => {
        handleLogin(value.email, value.password);
      }}
    />
  );
};
export default Login;
