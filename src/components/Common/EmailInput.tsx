import TextField from "@mui/material/TextField";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  disabled?: boolean;
}

const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  disabled,
}: InputFieldProps<T>) => {
  return (
    <div className="mb-5">
      <Controller
        name={name as Path<T>}
        control={control}
        defaultValue={"" as PathValue<T, Path<T>>}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            disabled={disabled}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputLabelProps={{ className: "dark:text-white" }}
            InputProps={{
              classes: {
                notchedOutline: "dark:border-white !important",
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default InputField;
