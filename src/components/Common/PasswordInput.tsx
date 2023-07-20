import { Control, Controller, FieldValues } from "react-hook-form";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordFieldProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  disabled?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  control,
  name,
  label,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-5">
      <Controller
        name={name}
        control={control as Control<FieldValues>}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            disabled={disabled}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            type={showPassword ? "text" : "password"}
            InputLabelProps={{ className: "dark:text-white" }}
            InputProps={{
              classes: {
                input: "MuiInputBase-input dark:text-white",
                notchedOutline: "dark:border-white",
              },
              endAdornment: (
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? (
                    <VisibilityIcon className="dark:text-white" />
                  ) : (
                    <VisibilityOffIcon className="dark:text-white" />
                  )}
                </IconButton>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default PasswordField;
