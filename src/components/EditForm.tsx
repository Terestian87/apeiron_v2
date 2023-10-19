import React from "react";
import styled from "styled-components";
import { StoredQuotesType } from "../types/types";
import Button from "./Button";
//#region Styled components

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledQuoteInfo = styled("div")`
  white-space: nowrap;
  justify-content: center;
  & h1 {
    justify-content: center;
    display: flex;
    overflow: hidden;
  }
  & p {
    padding: 5px;
    margin: 5px;
  }
  `;
const StyledHeader = styled("div")`
  font-size: 30px;
  font-family: "Courgette", cursive;
  
  margin: 15px auto;
  `;

const StyledQuoteContainer = styled("div")`
font-family: "Courgette", cursive;
white-space: normal;
padding: 10px;
`;

const StyledAuthorContainer = styled("div")`
font-family: "Courgette", cursive;
`;
const StyledTitlecontainer = styled("div")`
font-family: "Courgette", cursive;
`;
const StyledButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  margin: 15px 5px;
`;

//#endregion
interface EditFormProps {
  target: StoredQuotesType;
  removeEditMode: () => void;
  fetchUpdatedData: () => void;
}
const EditForm: React.FC<EditFormProps> = ({ target, removeEditMode }) => {
  const handleDelete = async () => {
    const response = await fetch(`/api/quotes/${target._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      removeEditMode();
      console.log("deleted quote: ", json);
    }
  };

  return (
    <StyledContainer>
      <StyledQuoteInfo>
        <StyledHeader>Selected</StyledHeader>
        <StyledQuoteContainer>{target.quote}</StyledQuoteContainer>
        <StyledAuthorContainer>{target.author}</StyledAuthorContainer>
        <StyledTitlecontainer>{target.title}</StyledTitlecontainer>
      </StyledQuoteInfo>
      <StyledButtonWrapper>
        <Button onClick={() => console.log("edit")} placeholder="Edit" />
        <Button onClick={handleDelete} placeholder="Delete" />
      </StyledButtonWrapper>
    </StyledContainer>
  );
};

export default EditForm;
