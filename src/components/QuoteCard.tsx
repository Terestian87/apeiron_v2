import React from "react";
import styled from "styled-components";

//#region styled components
const StyledContainer = styled("div")<{ selected: boolean }>`
  font-family: "Courgette", cursive;
  transition: all 0.5s ease;
  text-align: center;
  padding: 15px 30px;
  border-width: 2px;
  border-style: dotted;
  border-color: ${({ selected }) => (selected ? "red" : "white")};
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    border-color: red;
  }
  & > div {
    font-family: "Courgette", cursive;
  }
`;

const StyledQuote = styled("div")``;
const StyledBook = styled("div")``;
const StyledAuthor = styled("div")``;

//#endregion

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
  id?: number;
  handleQuoteClick: (id: number) => void;
  selected: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  selected,
  quote,
  author,
  title,
  id = 0,
  handleQuoteClick,
}) => {
  return (
    <StyledContainer selected={selected} onClick={() => handleQuoteClick(id)}>
      <StyledQuote>{quote}</StyledQuote>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledBook>{title}</StyledBook>
    </StyledContainer>
  );
};
export default QuoteCard;
