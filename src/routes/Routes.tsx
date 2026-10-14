import { createBrowserRouter } from "react-router";
import ErrorPage from "@/pages/Error/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "/dummy",
        element: <div className="bg-red-300">Dummy</div>,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <AuthLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/register",
  //       element: <RegisterPage />,
  //     },
  //     {
  //       path: "/login",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "/forgot-password",
  //       element: <ForgotPasswordPage />,
  //     },
  //     {
  //       path: "/verify-register-otp",
  //       element: <VerifyRegisterOtpPage />,
  //     },
  //     {
  //       path: "/verify-reset-pass-otp",
  //       element: <VerifyResetPassOtpPage />,
  //     },
  //     {
  //       path: "/reset-password",
  //       element: <ResetPasswordPage />,
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   element: <NotFoundError />,
  // },
]);
