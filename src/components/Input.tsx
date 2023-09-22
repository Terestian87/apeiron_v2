import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputInterface {
  type?: "text" | "number" | "email" | "password";
  hasLabel : boolean;
  label?: string;
  className?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref:  React.RefObject<HTMLInputElement>
}
const StyledInputWrapper = styled("div")``;
const StyledInputLabel = styled("label")<{ label?: boolean }>``;

const StyledInput = styled("input")<{ customWidth?: number }>`
  font-family: "Courgette", cursive;
  background-color: black;
  border-radius: 10px;
  outline: none;
  border: 3px solid red;
  color: white;
  text-align: center;
  margin: 5px 0 3rem 0;
  width: ${({ customWidth }) => (customWidth ? `${customWidth}px` : "50px")};
  &:active {
    outline: none;
  }
  &:focus {
    border: 3px solid white;
  }
  :hover {
    cursor: url("http://www.rw-designer.com/cursor-extern.php?id=113889"), auto;
  }
`;
const Input: React.FC<InputInterface> = (props: any) => {
  return (
    <StyledInputWrapper>
      {props.label && <StyledInputLabel />}
      <StyledInput {...props}/>
    </StyledInputWrapper>
  );
};

export default Input;
