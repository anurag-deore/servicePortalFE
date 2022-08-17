import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`

:root {
  --bg-dark-1: #0f101a;
  --bg-dark-2: #03030d;
  --bg-dark-3: #0e101a;
  --bg-light-1: #ffffff;
  --bg-light-2: #f0eef0;
  --light-1: #f8f9fc;
  --light-2: #a7b7da;
  --primary-1: #f7941e;
  --primary-1-bg: #fdf5eb;
  --primary-2: #0177bd;
  --primary-2-bg: #0177bd80;
  --primary-3: #282d86;
  --primary-3-bg: #282d8650;
  --dark: #1a1e25;
  --secondary: #282d86;
  --radius: 12px;
  --radius-2: 8px;
  --title-font: "Space Grotesk", sans-serif;
  --regular-font: "Rubik";
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// theme buttons color
// body {
//   background-color: ${({ theme }) => theme.colors.background};
//   color: ${({ theme }) => theme.colors.text};
//   font-family: 'Rubik';
//   overflow-x: hidden;
// }

body {
  background-color: var(--bg-light-2);
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: var(--regular-font);
  overflow-x: hidden;
  transition: all 0.20s linear;
}

hr {
  height: 1px;
  background-color: #f0eef0;
  border: none;
}


// theme buttons color
.light-theme {
  background-color: ${theme.light.colors.header};
}
.dark-theme {
  background-color: ${theme.dark.colors.header};
}
.blue-theme {
  background-color: ${theme.blue.colors.header};
}
.green-theme {
  background-color: ${theme.green.colors.header};
}
.brown-theme {
  background-color: ${theme.brown.colors.header};
}
.pink-theme {
  background-color: ${theme.pink.colors.header};
}

`;
