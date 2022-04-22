import styled from "styled-components";

export const StyledButton = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  padding: 13px 0;
  margin-bottom: 100px;
  margin: 0 auto;

  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

  color: rgba(255, 255, 255, 1);
  border: none;
  background-color: ${({ isDisabled }) =>
    isDisabled ? "rgba(46, 210, 201, 1)" : "rgba(119, 228, 224, 1)"};

  transition: background-color 0.3s ease-in;

  cursor: pointer;

  &:hover {
    background-color: rgb(37, 173, 165, 1);
  }

  &:active {
    background-color: rgba(46, 255, 255, 1);
    box-shadow: 10px 10px 30px rgba(125, 255, 255, 1);
  }
  @media (max-width: 744px) {
    padding: 21px 0;
  }
`;
