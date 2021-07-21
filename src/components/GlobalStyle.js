import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
   
    font-family: 'Roboto', sans-serif;
    background: #222222;
    color: white;
    
}


a{
    color: white;
    text-decoration: none;
    transition: all ease 0.5s;
    &:hover{
        color: white;
    }
}

.colors{
    color: #5f6366;
    color: #0065f3;
    color: #86b3d1;
    color: #99ced3;
    color: #f55673;
}

`;

export default GlobalStyle;
