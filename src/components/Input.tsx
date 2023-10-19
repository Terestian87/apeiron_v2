import styled from "styled-components";

interface StyledInputProps {
  customPxWidth?: string;
  customPercentageWidth?: number;
  customPxHeight?: string;
  customPercentageHeight?: number;
  customFontSize?: number;
}
interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  hasLabel: boolean;
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const StyledInputWrapper = styled("div")<{
  customPxWidth?: string;
  customPercentageWidth?: number;
  customPxHeight?: string;
  customPercentageHeight?: number;
}>`
  margin: 0 auto;
  width: ${({ customPxWidth, customPercentageWidth }) =>
    customPxWidth
      ? `${customPxWidth}px`
      : customPercentageWidth
      ? `${customPercentageWidth}%`
      : "250px"};
  height: ${({ customPxHeight, customPercentageHeight }) =>
    customPxHeight
      ? `${customPxHeight}px`
      : customPercentageHeight
      ? `${customPercentageHeight}%`
      : "50px"};
  :hover {
    cursor: url("http://www.rw-designer.com/cursor-extern.php?id=113889"), auto;
  }
`;
const StyledInputLabel = styled("label")<{ label?: boolean }>``;

const StyledInput = styled("input")<{ customFontSize?: number }>`
  font-family: "Courgette", cursive;
  font-size: 14px;
  background-color: transparent;
  border: 3px solid var(--primary-bright);
  border-radius: 10px;
  outline: none;
  color: var(--text-color-bright);
  text-align: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  font-size: ${({ customFontSize }) =>
    customFontSize ? `${customFontSize}px` : "14px"};

  &:active {
    outline: none;
  }
  &:focus {
    border: 3px solid;
  }
  :hover {
    cursor: url("http://www.rw-designer.com/cursor-extern.php?id=113889"), auto;
  }
`;

const Input: React.FC<InputInterface & StyledInputProps> = ({
  customPercentageWidth,
  customPxWidth,
  customPercentageHeight,
  customPxHeight,
  label,
  ...props
}) => {
  return (
    <StyledInputWrapper
      customPercentageWidth={customPercentageWidth}
      customPxWidth={customPxWidth}
      customPercentageHeight={customPercentageHeight}
      customPxHeight={customPxHeight}
    >
      {label && <StyledInputLabel />}
      <StyledInput {...props} />
    </StyledInputWrapper>
  );
};

export default Input;
