import React from "react";
import styled from "styled-components";

// interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  // onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  disabled: boolean;
  children?: string;
}

const StyledButtonWrapper = styled("div")`
  width: 350px;
  margin: 0 auto;
  font-size: 14px;
  border: 2px solid white;
  border-radius: 5px;
  /* background: rgb(135,37,37); */
  background: radial-gradient(
    circle,
    rgba(135, 37, 37, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  :hover {
    border-color: #c00000;
    color: #fff;
    background: transparent;
  }
`;
const StyledButton = styled("button")`
  background-color: black;
  outline: none;
  color: #fff;
  border: none;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  transition: all 0.5s ease;
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButtonWrapper>
      <StyledButton disabled={props.disabled} onClick={(event) => console.log(event)}>
        {props.children}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
