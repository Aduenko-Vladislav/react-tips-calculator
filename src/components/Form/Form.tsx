import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ICount, IOption } from "../../types";
import Button from "./components/Button/Button";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import Input from "./components/Input/Input";
import { StyledForm, Title, Subtitle, InputGroup, Total } from "./styles";

const Form = () => {
  const [count, setCount] = useState<ICount>({
    bill: "",
    persons: "",
    tips: 0.1,
    total: 0,
  });

  const { bill, persons, tips, total } = count;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCount({
      ...count,
      [name]: value,
    });
  };

  const handleCustomSelect = (value: IOption | null) => {
    if (value) {
      setCount({
        ...count,
        tips: value.value,
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalBill = +bill / +persons + tips + +bill / +persons;
    if (bill && persons) {
      setCount({
        ...count,
        total: totalBill,
      });
    }
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (bill > 0 && persons > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          name="bill"
          type="number"
          placeholder="Enter bill"
          min="1"
          handleInputChange={handleInputChange}
          value={bill}
        ></Input>
        <Input
          name="persons"
          placeholder="Enter persons"
          min="1"
          type="number"
          value={persons}
          handleInputChange={handleInputChange}
        ></Input>
        <CustomSelect
          name="selectTip"
          handleCustomSelect={handleCustomSelect}
          value={tips}
        ></CustomSelect>
      </InputGroup>
      <Total>Total:{total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

export default Form;
