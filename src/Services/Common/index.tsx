import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  email: string;
  password: string;
}

export const handleFormSubmit: SubmitHandler<FormData> = async (
  data: FormData
) => {
  const token = uuidv4();
  const dataWithToken = { ...data, token };
  let isFormReset = false;

  try {
    console.log(data);
    const response = await axios.post(
      "http://150.95.111.42:3000/api/auth/login",
      dataWithToken
    );
    console.log(response);

    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    toast.success("Logged in successfully");
    isFormReset = true;
  } catch (error: any) {
    toast.error("Invalid account or password");
  }
  return isFormReset;
};
