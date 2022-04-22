import { StyledButton } from "./styles";
interface IButton {
  isDisabled: boolean;
}

const Button = ({ isDisabled }: IButton) => {
  return (
    <StyledButton type="submit" disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};

export default Button;
