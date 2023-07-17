import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm, SubmitHandler, Resolver, Control } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import InputField from "../InputForm/EmailInput";
import PasswordField from "../InputForm/PasswordInput";
import Button from "@mui/joy/Button";

interface LoginFormProps {
  onSubmit: SubmitHandler<FormData>;
}

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/,
      "Invalid email format"
    ) as yup.StringSchema<string>,
  password: yup
    .string()
    .required("Please enter password")
    .min(7, "Password is too short")
    .matches(
      /^[^\u00C0-\u017F]+$/,
      "Invalid password format"
    ) as yup.StringSchema<string>,
});

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const { handleSubmit, control, reset } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    const token = uuidv4();
    const dataWithToken = { ...data, token };
    axios
      .post("http://localhost:3000/users", dataWithToken)
      .then((response) => {
        console.log(response.data);
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="">
      <InputField name="email" label="Email" control={control} />
      <PasswordField
        name="password"
        label="Password"
        control={control as Control<FormData>}
      />
      <Button type="submit" size="md" variant="solid" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
