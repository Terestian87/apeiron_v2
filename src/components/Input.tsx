import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputInterface {
  type?: "text" | "number" | "email" | "password";
  hasLabel: boolean;
  label?: string;
  className?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
  customPxWidth?: string;
  customPercentageWidth?: number;
}
const StyledInputWrapper = styled("div")<{
  customPxWidth?: string;
  customPercentageWidth?: number;
}>`
  margin: 0 auto;
  width: ${({ customPxWidth, customPercentageWidth }) =>
    customPxWidth
      ? `${customPxWidth}px`
      : customPercentageWidth
      ? `${customPercentageWidth}%`
      : "250px"};
  :hover {
    cursor: url("http://www.rw-designer.com/cursor-extern.php?id=113889"), auto;
  }
`;
const StyledInputLabel = styled("label")<{ label?: boolean }>``;

const StyledInput = styled("input")`
  font-family: "Courgette", cursive;
  background-color: black;
  border: 3px solid red;
  border-radius: 10px;
  outline: none;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  width: 100%;
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
const Input: React.FC<InputInterface> = (props: InputInterface) => {
  return (
    <StyledInputWrapper
      customPercentageWidth={props.customPercentageWidth}
      customPxWidth={props.customPxWidth}
    >
      {props.label && <StyledInputLabel />}
      <StyledInput {...props} />
    </StyledInputWrapper>
  );
};

export default Input;
