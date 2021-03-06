import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --shape: #FFFFFF;
  --background: #F0F2F5;
  
  --green: #33cc95;
  --red: #E52E4D;
  --blue: #5429CC;
  --blueLight: #6933FF;
  
  --title: #363F5F;
  --body: #969CB3;
  
  --inputBg: #E7E9EE;
  --inputBd: #d7d7d7;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
  }
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {    
  font-weight: 600;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background-color: rgba(0,0,0, 0.7);
  
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  position: relative;
  
  width: 100%;
  max-width: 576px;
  padding: 3rem;
  border-radius: 0.25rem;
  
  background-color: var(--background);
}

.react-modal-close {
  position: absolute;
  
  top: 1.5rem;
  right: 1.5rem;
  
  border: 0;
  background-color: transparent;
  
  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9);
  }
}
`
