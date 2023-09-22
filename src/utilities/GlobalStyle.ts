import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

     *{
          margin:0;
          padding:0;
          box-sizing: inherit;
          font-family: 'Open Sans', sans-serif;
     }

 :root {
   
 }

 body {
      background-color: black;
      color:white;
      box-sizing: border-box;
      a{
           cursor:pointer;
      }
      button{
           cursor:pointer;
      }
 }

`;
export default GlobalStyle;
