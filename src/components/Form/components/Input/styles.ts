import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  line-height: 26px;
  text-align: center;

  padding: 21px 170px;
  max-width: 456px;
  width: 100%;

  border-radius: 30px;

  background: rgba(255, 255, 255, 1);
  color: rgba(117, 108, 108, 0.6);
  &::placeholder {
    font-size: 18px;
    line-height: 26px;
    color: rgba(130, 108, 108, 1);
  }

  @media (max-width: 744px) {
    max-width: 331px;
    padding: 21px 10px;
  }
`;
