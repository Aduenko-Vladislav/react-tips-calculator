import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IInput {
  name: string;
  placeholder: string;
  min: string;
  type: string;
  value: string | number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  placeholder,
  min,
  type,
  value,
  handleInputChange,
}: IInput) => {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      min={min}
      type={type}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
