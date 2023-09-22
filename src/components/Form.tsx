import React, { useRef, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import { AuthContext, User } from "../context/AuthContext";

//#region styled components
const StyledForm = styled("form")`
  /* width: 100%;
  z-index: 2; */
`;

const StyledSubmitButton = styled("button")`
  padding: 1rem 2rem;
  background-color: transparent;
  color: grey;
  font-size: 14px;
  outline: none;
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.5s ease;
  :hover {
    background-color: #c00000;
    border-color: #c00000;
    color: #fff;
  }
`;
//#endregion

interface IProps {
  setSpiral: React.Dispatch<React.SetStateAction<boolean>>;
  spiral: boolean;
}

const Form: React.FC<IProps> = ({ setSpiral, spiral }) => {
  const [loggedUser, setLoggedUSer] = useState<User>(null);
  const [quote, setQuote] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const quoteRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const context = useContext(AuthContext);

  useEffect(() => {
    setLoggedUSer(context.user);
    console.log("useffect called in Form, logged user is: ", loggedUser);
  }, [context.user, loggedUser]);

  const resetDefaultInput = () => {
    setQuote("");
    setTitle("");
    setAuthor("");
  };

  const capitalizeFirstLetter = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const onSubmitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const quoteToSubmit = {
        quote: capitalizeFirstLetter(quote),
        title: title ? title : "Unknown",
        author: author ? author : "Anonimous",
        loggedUser: loggedUser === null ? "A bird of passage" : loggedUser,
      };
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: JSON.stringify(quoteToSubmit),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(
        "🚀 ~ file: Form.tsx ~ line 112 ~ onSubmitFormHandler ~ json",
        json
      );

      console.log("new quote posted ====>", quoteToSubmit);
      resetDefaultInput();
    } catch (err) {
      console.log(
        "🚀 ~ file: Form.tsx ~ line 127 ~ onSubmitFormHandler ~ err",
        err
      );
    }

    setSpiral(!spiral);
    if (quoteRef.current && titleRef.current && authorRef.current) {
      quoteRef.current.blur();
      titleRef.current.blur();
      authorRef.current.blur();
    }
    setTimeout(() => {
      resetDefaultInput();
      setIsLoading(false);
    }, 5000);
  };
  return (

      <StyledForm onSubmit={(e) => onSubmitFormHandler(e)}>
        <Input
          hasLabel={false}
          name="quote"
          placeholder="Write your quote here"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          ref={quoteRef}
          // autoComplete="off"
          // placeholder="Write your quote here"
          // disabled={isLoading}
        />
        {/* <Input
            name="title"
            className="book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            placeholder="Unknown"
            autoComplete="off"
            disabled={isLoading}
          />
          <Input
            name="author"
            className="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            ref={authorRef}
            placeholder="Anonimous"
            autoComplete="off"
            disabled={isLoading}
          /> */}
        <StyledSubmitButton disabled={isLoading} type="submit">
          Send to the Apeiron
        </StyledSubmitButton>
        {/* </Input> */}
      </StyledForm>

  );
};

export default Form;
