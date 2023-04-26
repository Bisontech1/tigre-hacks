"use client";
import SignIn from "../../components/Login/SignIn";
const Login = () => {
  return (
    <SignIn
      onSignInClicked={(value) => {
        console.log(value);
      }}
    />
  );
};
export default Login;
