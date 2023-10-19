import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Spiral from "../components/Spiral";
import { StoredQuotesType } from "../types/types";

//#region Styled components
const StyledLibraryWrapper = styled("div")`
  height: calc(100vh - ${process.env.REACT_APP_NAVBAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
`;
const StyledQuoteWrapper = styled("div")`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  div {
    font-family: "Courgette", cursive;
  }
  .quote {
    font-size: 3rem;
  }
  .title {
    font-size: 2rem;
    color: #adadad;
    margin-top: 2rem;
  }
  .author {
    font-size: 1rem;
    color: #777777;
    margin-top: 1rem;
  }
`;

const StyledQuoteFader = styled(motion.div)`
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

const StyledSpiralFader = styled(motion.div)`
  position: absolute;
  width: 60%;
`;

const StyledButtonAnimator = styled(motion.div)`
  position: absolute;
  top: 50%;
`;

const StyledCallButton = styled("button")`
  padding: 1rem 2rem;
  background-color: transparent;
  color: grey;
  font-size: 14px;
  outline: none;
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.5s ease;
  position: relative;

  :hover {
    background-color: #c00000;
    border-color: #c00000;
    color: #fff;
  }
`;

//#endregion

const Summon = () => {
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [randomQuote, setRandomQuote] = useState<StoredQuotesType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<StoredQuotesType[]>([]);
  const noQuotesInTheApeiron : StoredQuotesType = {
    quote: 'There is just void in the Apeiron',
    title: 'Feed me some notes',
    author: 'The Bard',
    user: 'Apeiron'
  } 

  useEffect(() => {
    const fetchAllQuotes = async () => {
      const response = await fetch("http://localhost:5000/api/quotes");
      if (response.ok) {
        response.json().then((json) => {
          setQuotes(json);
        });
      }
    };
    fetchAllQuotes();
  }, []);

  const summonClickHandler = () => {
    setIsLoading(true);
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    quotes.length > 0 ? setRandomQuote(quotes[randomQuoteIndex]): setRandomQuote(noQuotesInTheApeiron);
    setShowQuote(true);
    setTimeout(() => {
      setShowQuote(false);
      setIsLoading(false);
    }, 10000);
  };

  return (
    <StyledLibraryWrapper>
      {showQuote && (
        <StyledSpiralFader
          animate={{
            opacity: showQuote ? 1 : 0,
          }}
          transition={{ duration: showQuote ? 6 : 1 }}
        >
          <Spiral isReverse={true} />
        </StyledSpiralFader>
      )}
      <StyledQuoteFader
        animate={{
          opacity: showQuote ? 1 : 0,
          transform: showQuote ? "scale(1)" : "scale(0.1)",
        }}
        transition={{ duration: showQuote ? 6 : 1 }}
      >
        <StyledQuoteWrapper>
          <div className="quote">{randomQuote?.quote}</div>
          <div className="title">{randomQuote?.title}</div>
          <div className="author">{randomQuote?.author}</div>
        </StyledQuoteWrapper>
      </StyledQuoteFader>
      <StyledButtonAnimator
        animate={{ opacity: showQuote ? 0 : 1 }}
        transition={{ duration: 1.5 }}
      >
        <StyledCallButton
          disabled={isLoading}
          onClick={() => summonClickHandler()}
        >
          Summon thought
        </StyledCallButton>
      </StyledButtonAnimator>
    </StyledLibraryWrapper>
  );
};

export default Summon;

//#region  component without animations for css tweaks
//   return (
//     <StyledLibraryWrapper>
//       <StyledQuoteFader>
//         <StyledQuoteWrapper>
//           <div className="quote">{randomQuote?.quote}</div>
//           <div className="title">{randomQuote?.title}</div>
//           <div className="author">{randomQuote?.author}</div>
//         </StyledQuoteWrapper>
//       </StyledQuoteFader>
//       <StyledButtonAnimator>
//         <StyledCallButton onClick={() => summonClickHandler()}>
//           Summon thought
//         </StyledCallButton>
//       </StyledButtonAnimator>
//     </StyledLibraryWrapper>
//   );
// };
//#endregion
