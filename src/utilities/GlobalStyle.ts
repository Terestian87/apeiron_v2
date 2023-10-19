import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
     margin:0;
     padding:0;
     font-family: "Dancing Script", cursive;
     box-sizing: border-box;
     }
:root{
     --bg-dark:#000000;
     --primary-bright:#f80000;
     --primary-dark:#ba0000;
     --secondary-bright:#7c0000;
     --secondary-dark: #3e0000;
     --text-color-bright:#ffffff;
     --text-color-dark:#ffffff;
     --spiral-color:#872525e6;
     --border-color-bright:#ffffff;
}
body {
     background-color: var(--bg-dark);
     color:var(--text-color-bright);
          a {
               cursor:pointer;
          }

          button {
               cursor:pointer;
          }
     }

`;
export default GlobalStyle;
