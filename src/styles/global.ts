import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');    

    :root {
        --background: #f0f2f6;
    }

    html {
        @media (max-width: 1080px) {
          font-size: 93.75%;
        }
    
        @media (max-width: 720px) {
          font-size: 87,5%;
        }
      }

      body {
        font-family: 'Poppins', sans-serif;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
      }
`