import { createGlobalStyle } from "styled-components";
import circles from "./assets/circle.svg";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input{
    border: none
}

body{
    background: no-repeat top left url(${circles}) rgba(234, 242, 242, 1);
    src: url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: 'Raleway', sans-serif;
    letter-spacing: -0.3px;
}
`;

export default GlobalStyle;
