import { StyledInput } from "./styles";

interface IInput {
  placeholder: string;
  min: string;
  type: string;
  setValue: void;
  inputValue: string;
}

const Input = ({ placeholder, min, type, setValue, inputValue }:any) => {
  return (
    <StyledInput
      placeholder={placeholder}
      min={min}
      type={type}
      value={inputValue}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default Input;
