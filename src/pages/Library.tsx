import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuoteCard from "../components/QuoteCard";
import EditForm from "../components/EditForm";
import { StoredQuotesType } from "../types/types";
import { fetchAllQuotes } from "../queries/quotes.fetch";

//#region styled components
const StyledContainer = styled("div")<{ editMode: boolean }>`
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  border:1px solid red;
  overflow: hidden;
`;

const StyledQuoteList = styled("div")<{ editMode: boolean }>`
  transition: all 0.5s ease-in-out;
  text-align: center;
  padding: 1rem;
  border: 1px solid white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
  margin: 15px auto;
  max-width: ${(props) => (props.editMode ? "60%" : "80%")};
  align-self: center;
  position:relative;
`;

const StyledEditContainer = styled("div")<{ editMode: boolean }>`
  border: 1px solid white;
  transition: all 0.5s ease-in-out;
  text-align: center;
  opacity: ${(props) => (props.editMode ? "1" : "0")};
  width: ${(props) => (props.editMode ? "30%" : "0")};
  display: flex;
  justify-content: center;
  height: fit-content;
  position: relative;
  top: 20vh;
  right: 2vw;
`;
//#endregion

const noQuotesInTheApeiron: StoredQuotesType = {
  quote: "There is just void in the Apeiron",
  title: "Feed me some notes",
  author: "The Bard",
  _id: 1234,
  user: "Apeiron",
};

const Library = () => {
  const [storedQuotes, setStoredQuotes] = useState<StoredQuotesType[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedQuote, setSelectedQuote] =
    useState<StoredQuotesType>(noQuotesInTheApeiron);

  useEffect(() => {
    (async () => {
      if (!editMode) {
        const quotes = await fetchAllQuotes();
        setStoredQuotes(quotes);
      }
    })();
  }, [editMode]);

  // const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>)=>{
  //   fetchAllQuotes()
  // }

  const handleQuoteClick = (id: number) => {
    const selectedQuote = storedQuotes.find((quote) => quote._id === id);
    if (selectedQuote && selectedQuote?._id !== 1234) {
      setSelectedQuote(selectedQuote);
      setEditMode(true);
      window.scrollTo(0, 0)
    }
  };

  const handleEditMode = () => {
    setEditMode(false);
  };

  if (storedQuotes.length === 0) {
    storedQuotes.push(noQuotesInTheApeiron);
  }

  return (
    <StyledContainer editMode={editMode}>
      <StyledQuoteList editMode={editMode}>
        {storedQuotes.length > 0 &&
          storedQuotes.map(
            ({ _id, quote, title = "Unknown", author = "Unknown" }) => {
              return (
                <QuoteCard
                  key={_id}
                  id={_id}
                  quote={quote}
                  title={title}
                  author={author}
                  handleQuoteClick={handleQuoteClick}
                  selected={selectedQuote._id === _id}
                />
              );
            }
          )}
      </StyledQuoteList>
      <StyledEditContainer editMode={editMode}>
        <EditForm
          fetchUpdatedData={fetchAllQuotes}
          target={selectedQuote}
          removeEditMode={handleEditMode}
        />
      </StyledEditContainer>
    </StyledContainer>
  );
};

export default Library;

//render compoent with width 0
