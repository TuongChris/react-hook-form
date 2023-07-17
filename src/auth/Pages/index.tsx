import React from "react";
import LoginForm from "../components/LoginForm";

interface ListPageProps {}

const ListPage: React.FC<ListPageProps> = () => {
  const handleTodoFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="max-w-[500px] px-5 py-5 m-auto mt-10">
      <h1 className="font-bold text-2xl text-center mb-10">Login Form</h1>
      <LoginForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
};

export default ListPage;
