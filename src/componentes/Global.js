import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;  
    }

    body {
    background: ${({ theme }) => theme.body}; 
    .container-header{
        border-bottom-color: ${({ theme }) => theme.listagem};
        .desktop{
            span {
                color: ${({ theme }) => theme.titles}; 
            }
        }
    }
    .container-filtros{
        background: ${({ theme }) => theme.listagem}; 
        }
    }   
    .container-item{
        background: ${({ theme }) => theme.listagem};  
        
        p {
            color: ${({ theme }) => theme.text}; 
        }
        span {
            color: ${({ theme }) => theme.text}; 
        }
    } 
    .container-footer{
        button{
            margin-right: 10px;
            background: ${({ theme }) => theme.listagem}; 
        }
    }

    @media screen and (min-width: 992px) {
        .container-footer{
            margin-top: 10px;
            border-top-color: ${({ theme }) => theme.listagem}; 
        }
        .container-header{
            button{
                background: ${({ theme }) => theme.titles}; 
            }
        }
    }

    transition: all 0.25s linear;
    }
`;