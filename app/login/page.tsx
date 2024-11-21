import React from "react";
import Login from "@/components/auth/Login";
import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="w-full flex flex-col">
        <div className="m-auto py-20">
          <Login />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
