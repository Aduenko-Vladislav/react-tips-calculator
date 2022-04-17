import { StyledButton } from "./styled";
interface IButton {
  person: number;
  bill: number;
  tips: number;
  total: number;
}

const Button = ({totalBill}:any) => {
  return (
    <StyledButton type="button" onClick={() => totalBill()}>
      hhhoooo 🍻
    </StyledButton>
  );
};

export default Button;
