import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;

  color: rgba(255, 255, 255, 1);
  background: rgba(46, 210, 201, 1);
  border: none;

  padding: 13px 0;
  margin-bottom: 100px;
  max-width: 456px;
  width: 100%;
  &:hover {
    background-color: rgba(46, 255, 255, 1);
  }

  &:active {
    background-color: rgba(46, 255, 255, 1);
    box-shadow: 10px 10px 30px rgba(125, 255, 255, 1);
  }
  @media (max-width: 744px) {
    max-width: 321px;
    padding: 21px 0;
  }
`;
