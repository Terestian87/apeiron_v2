import React, { useRef, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { AuthContext, User } from "../context/AuthContext";

//#region styled components
const StyledForm = styled("form")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* z-index: 2;  */
`;

//#endregion

interface FormInterface {
  setSpiral: React.Dispatch<React.SetStateAction<boolean>>;
  spiral: boolean;
}

const Form: React.FC<FormInterface> = ({ setSpiral, spiral }) => {
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
    // if (quoteRef.current && titleRef.current && authorRef.current) {
    //   quoteRef.current.blur();
    //   titleRef.current.blur();
    //   authorRef.current.blur();
    // }
    setTimeout(() => {
      resetDefaultInput();
      setIsLoading(false);
    }, 5000);
  };
  return (
    <StyledForm onSubmit={(e) => onSubmitFormHandler(e)} autoComplete="off">
      <Input
        hasLabel={false}
        name="quote"
        placeholder="Write your quote here"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        ref={quoteRef}
        customPercentageWidth={100}
        customPxHeight="100"
        customFontSize={25}
        disabled={isLoading}
        />
      <Input
        hasLabel={false}
        name="title"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
        customPercentageWidth={75}
        customPxHeight="75"
        customFontSize={20}
        disabled={isLoading}
        />
      <Input
        hasLabel={false}
        name="author"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        ref={authorRef}
        customPercentageWidth={50}
        customFontSize={15}
        customPxHeight="50"
        disabled={isLoading}
      />
      <Button disabled={isLoading} type="submit">
        Send to the Apeiron
      </Button>
    </StyledForm>
  );
};

export default Form;
