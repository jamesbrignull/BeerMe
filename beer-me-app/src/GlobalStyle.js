import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Quattrocento', serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Oswald', sans-serif;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: 'Quattrocento', serif;
    }

    span{
        font-weight: bold;
        color:#673ab7;
    }
`;

export default GlobalStyle;
