import { useState } from "react";
import Button from "./components/Button/Button";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import Input from "./components/Input/Input";
import { StyledForm, Title, Subtitle, InputGroup, Total } from "./styles";

const Form = () => {
  const [bill, setBill] = useState(null);
  const [person, setPerson] = useState(null);
  const [tips, setTips] = useState(0.1);
  const [total, setTotal] = useState(0);

  const totalBill = () => {
    if (bill && person) {
      setTotal((bill / person) * +tips + bill / person);
    }
    return;
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          placeholder="Enter bill"
          min="1"
          type="number"
          setValue={setBill}
          inputValue={bill}
        ></Input>
        <Input
          placeholder="Enter persons"
          min="1"
          type="number"
          setValue={setPerson}
          inputValue={person}
        ></Input>
        <CustomSelect setTips={setTips}></CustomSelect>
      </InputGroup>
      <Total>Total:{total.toFixed(2)}$</Total>
      <Button totalBill={totalBill} />
    </StyledForm>
  );
};

export default Form;
