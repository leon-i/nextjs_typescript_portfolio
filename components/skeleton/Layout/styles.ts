import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
      min-height: 100vh;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    button {
        margin: 0;
        padding: 0;
        background: transparent;
        outline: none;
        border: none;
    }
    
    h1 {
        font-size: 2.25em;
        margin: 0;
        padding: 0;
    }
    
    h2 {
        font-size: 1.75em;
        margin: 0;
        padding: 0;
    }
    
    h3 {
        font-size: 1.15em;
        margin: 0;
        padding: 0;
    }
    
    h4 {
        font-size: 1em;
        margin: 0;
        padding: 0;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    footer {
        align-self: flex-end;
    }
`;