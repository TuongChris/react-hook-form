import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DarkModeToggle from "../../../../components/Layouts/DarkMode/index";
import LoginForm from "../../components/LoginForm";

interface ListPageProps {}

const ListPage: React.FC<ListPageProps> = () => {
  const handleTodoFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <DarkModeToggle
        initialDarkMode={localStorage.getItem("theme") === "dark"}
      />

      <div className="max-w-[500px] px-5 py-5 m-auto mt-5 dark:bg-slate-800">
        <h1 className="font-bold text-2xl text-center mb-5 dark:text-white">
          Login Form
        </h1>
        <div className="w-full flex justify-center items-center mb-10">
          <LockOutlinedIcon className="rounded-full bg-blue-500 dark:text-white scale-[1.5] p-1" />
        </div>

        <LoginForm onSubmit={handleTodoFormSubmit} />

        <div className="flex justify-between dark:text-white mt-5 text-xs underline text-blue-700">
          <a href="/" className="cursor-pointer">
            Forgot password
          </a>
          <a href="/" className="cursor-pointer">
            Dont`t have an account?<span className="ml-1">Sign Up</span>
          </a>
        </div>

        <p className="text-center mt-14 dark:text-white text-gray-500 text-sm">
          Copyright ©{" "}
          <a href="/" className="underline cursor-pointer">
            Your Website
          </a>{" "}
          2023
        </p>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ListPage;
