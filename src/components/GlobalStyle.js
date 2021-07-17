import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
   
    font-family: 'Roboto', sans-serif;
    background: #5f6366;
    
}

a{
    color: black;
    text-decoration: none;
    transition: all ease 0.5s;
    &:hover{
        color: blue;
    }
}

.colors{
    color: #5f6366;
    color: #4d6d9a;
    color: #86b3d1;
    color: #99ced3;
    color: #edb5bf;
}

`;

export default GlobalStyle;
