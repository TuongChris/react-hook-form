import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@mui/joy";
import Button from "@mui/joy/Button";
import { styled } from "@mui/styles";
import { Control, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { handleFormSubmit } from "../../../../Services/Common";
import { schema } from "../../../../Validation/Yup";
import InputField from "../../../../components/Common/EmailInput";
import PasswordField from "../../../../components/Common/PasswordInput";

interface LoginFormProps {
  onSubmit: SubmitHandler<FormData>;
}

interface FormData {
  email: string;
  password: string;
}

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #1E90FF 10%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const LoginForm: React.FC<LoginFormProps> = ({}: LoginFormProps) => {
  const { handleSubmit, control, reset } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const isSuccess = await handleFormSubmit(data);
    if (isSuccess) {
      resetForm();
    }
  };

  const resetForm = () => {
    const defaultValues: FormData = {
      email: "",
      password: "",
    };
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="email" label="Email" control={control} />
      <PasswordField
        name="password"
        label="Password"
        control={control as Control<FormData>}
      />
      <div className="flex flex-row gap-1 mb-7 ">
        <Checkbox defaultChecked className="scale-[0.9] cursor-pointer" />
        <label className="dark:text-white">Remember me</label>
      </div>
      <MyButton type="submit" size="md" variant="solid" fullWidth>
        Login
      </MyButton>
    </form>
  );
};

export default LoginForm;
