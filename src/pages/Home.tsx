import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled("div")`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
`;

const StyledTitle = styled("h1")`
  margin-bottom: 2rem;
  font-size: 3rem;
`;
const StyledParagraph = styled("p")`
  margin: 1rem auto;
  width: 80%;
`;
const Home = () => {
  return (
    <StyledPageContainer>
      <StyledTitle>Ápeiron</StyledTitle>
      <StyledParagraph>
        Anassimandro riteneva che in origine tutte le cose fossero
        armoniosamente unite nell'ápeiron, ma per una colpa originaria, non
        meglio specificata, e proprio mediante il movimento rotatorio
        dell'ápeiron stesso, le cose presero a separarsi a coppie di contrari,
        dando origine al cosmo: così dall'ápeiron uscirono luce e tenebre, notte
        e giorno, vita e morte.
      </StyledParagraph>
      <StyledParagraph>
        Questa colpa è probabilmente dovuta alla costituzione stessa e quindi
        alla nascita degli esseri, essersi distaccati dall'ápeiron assumendo
        un'esistenza individuale, dato che nessuno di essi può evitarla e
        sottrarsi alla pena. È rompere l'armonia originaria dell'àpeiron la
        colpa del mondo e degli uomini.
      </StyledParagraph>
      <StyledParagraph>
        Infatti con la rottura dell'unità abbiamo la divisione del mondo in
        contrari. Gli uomini, invece, scontano la colpa originaria vivendo (la
        vita è intesa come punizione), finché i contrari potranno di nuovo
        fondersi e tornare indistinti nell'ápeiron.
      </StyledParagraph>
    </StyledPageContainer>
  );
};
export default Home;