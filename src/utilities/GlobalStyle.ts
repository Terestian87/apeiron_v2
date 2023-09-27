import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

     *{
          margin:0;
          padding:0;
          font-family: "Dancing Script", cursive;
          box-sizing: border-box;
     }

 :root {
   
 }

 body {
      background-color: black;
      color:white;
      a{
           cursor:pointer;
      }
      button{
           cursor:pointer;
      }
 }

`;
export default GlobalStyle;
