import {
  StyledForm,
  Title,
  Subtitle,
  InputGroup,
  InputItemBill,
  InputItemPersons,
  SelectTips,
} from "./styles";

const Form = () => {
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <InputItemBill placeholder="Enter bill"></InputItemBill>
        <InputItemPersons placeholder="Enter persons"></InputItemPersons>
        <SelectTips ></SelectTips>
      </InputGroup>
      {/* <Total>
        <TotalText></TotalText>
      </Total>
      <Button></Button> */}
    </StyledForm>
  );
};

export default Form;
