import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #e7ffff;
  --background1: #ceffff;
  --background2: #67ffff;
  --accent1: #25a2a2;
  --accent2: #67ffff;
}
h1,
h2,
h3,
p {
  padding: 0;
  margin: 0;
}
ul,
ol {
  list-style: none;
  padding: 0;
}
button {
  font-size: inherit;
  font-style: inherit;
  color: var(--background);
  background-color: #63d4d3;
  border: 2px solid var(--accent1);
  border-radius: 0.8em;
  padding: 0.3em 1em;
  &:hover {
    background-color: var(--accent2);
    box-shadow: 0px 0px 18px 5px var(--accent1) inset,
      0px 0px 8px 5px var(--accent1);
    cursor: pointer;
  }
}`;
