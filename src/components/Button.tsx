import React from "react";
import styled from "styled-components";

interface ButtonProps {
  id?: string;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  disabled: boolean;
  type: string;
  children?: string;
}
const StyledButtonWrapper = styled("div")`
  font-size: 14px;
  border: 2px solid white;
  border-radius: 5px;
  background: transparent;
    `;
const StyledButton = styled("button")`
  /* background-color: transparent; */
  outline: none;
  color: #fff;
  border: none;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  transition: all 0.5s ease;
  :hover {
    background-color: #c00000;
    border-color: #c00000;
    color: #fff;

  }
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={(event) => console.log(event)}>
        {props.children}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
