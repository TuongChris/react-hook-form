import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const handleFormSubmit: SubmitHandler<FormData> = async (
  data: FormData
) => {
  const token = uuidv4();
  const dataWithToken = { ...data, token };

  try {
    const response = await axios.get("http://localhost:3000/users");
    const userData: FormData[] = response.data;

    const isValidUser = userData.some(
      (user: FormData) =>
        user.email === data.email && user.password === data.password
    );

    if (isValidUser) {
      toast.success("Logged in successfully");
      return true;
    } else {
      toast.error("Invalid email or password");
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
