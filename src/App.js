import React, { useState } from "react";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { light } from "./components/styles/Theme.styled";
import SideNav from "./components/SideNav";
// import Quotes from "./components/Quotes";
// import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
// import ThemeSwitcherList from "./components/ThemeSwitcherList";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <SideNav />
        {/* <HeaderComponent /> */}
        {/* <ThemeSwitcherList selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} /> */}
        {/* <Quotes /> */}
        {/* <FooterComponent /> */}
        {/* 
        --sidenav--
        --header--
        --content--
         */}
      </div>
    </ThemeProvider>
  );
}

export default App;
