import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./components/styles/Global";
import { Header } from "./components/styles/Header.styled";
import { Footer } from "./components/styles/Footer.styled";
import Quotes from "./components/Quotes";
import {
  ThemeContainer,
  ThemeButton,
} from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./components/styles/Theme.styled";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const [name, setname] = useState("");
  const [header, setheader] = useState(light.colors.header);
  const [background, setBackground] = useState(light.colors.background);
  const [footer, setFooter] = useState(light.colors.footer);
  const [text, setText] = useState(light.colors.text);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const handleChange = () => {
    const theme = {
      name: name,
      colors: {
        header: header,
        background: background,
        footer: footer,
        text: text,
        quoteBgc: "hsl(60, 40%, 100%)",
        quoteTitle: "hsl(0, 1%, 38%)",
        quoteBody: "hsl(0, 1%, 38%);",
        quoteBorder: "hsl(0, 0%, 87%)",
        border: "hsl(0, 0%, 87%)",
      },
    };
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>
        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}
          ></ThemeButton>
        </ThemeContainer>
        <Quotes />
        <div>
          <label>Set Name</label>
          <input
            placeholder="Set name"
            defaultValue={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label>Select Header</label>
          <input
            type="color"
            defaultValue={header}
            onChange={(e) => setheader(e.target.value)}
          />
          <br />
          <label>Select background</label>
          <input
            type="color"
            defaultValue={background}
            onChange={(e) => setBackground(e.target.value)}
          />
          <br />
          <label>Select footer</label>
          <input
            type="color"
            defaultValue={footer}
            onChange={(e) => setFooter(e.target.value)}
          />
          <br />
          <label>Select text</label>
          <input
            type="color"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button onClick={handleChange}>Make</button>
        </div>
        <Footer>
          <p>
            Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
          </p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
