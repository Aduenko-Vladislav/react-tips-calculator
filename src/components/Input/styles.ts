import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 21px 118px;

  font-size: 18px;
  line-height: 26px;
  text-align: center;

  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
  color: rgba(117, 108, 108, 0.6);

  &::placeholder {
    font-size: 18px;
    line-height: 26px;

    color: rgba(130, 108, 108, 1);
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  @media (max-width: 744px) {
    padding: 21px 56px;
  }
`;
