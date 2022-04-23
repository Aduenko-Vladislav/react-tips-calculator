import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 45px;

  max-width: 456px;
  width: 100%;
  margin: 207px auto 0;

  @media (max-width: 744px) {
    margin-top: 236px;
  }

  @media (max-width: 414px) {
    margin-top: 241px;
  }
`;

const Title = styled.h2`
  margin: 0 auto;

  font-size: 40px;
  line-height: 58px;

  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Subtitle = styled.p`
  margin: 0 auto;

  font-size: 32px;
  line-height: 38px;

  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 33px;

  @media (max-width: 744px) {
    grid-gap: 17px;
  }

  @media (max-width: 414px) {
    grid-gap: 15px;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: left;
`;

const Total = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: left;
`;

export { StyledForm, Title, Subtitle, InputGroup, TotalContainer, Total };
