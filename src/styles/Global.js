import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        --primaryColor: #0075B7;
    }

    html{
        scroll-behavior: smooth;
    }

    body{ 
        background-color: #f5f5f5;
        background-image: url("https://www.transparenttextures.com/patterns/hexellence.png");
    }

    p{ width: 100% }

    input[type="text"]:nth-child(1){ margin-bottom: 5px }

    ::-webkit-scrollbar{ width: 10px }

    ::-webkit-scrollbar-thumb{
        background-color: var(--primaryColor);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover{ background-color: #0074b788 }

    @keyframes takeOut {
        0%{
            transform: translateX(0%);
        }
        20%{
            transform: translateX(15%);
        }
        100%{
            transform: translateX(-300%);
        }
    }
`;