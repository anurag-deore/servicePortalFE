import * as themeData from '../components/styles/Theme.styled';

export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const setThemeToLocalStorage = (name, header, background, footer, text, setSelectedTheme, setAllThemesList) => {
  const newTheme = {
    name: name,
    colors: {
      header: header,
      background: background,
      footer: footer,
      text: text,
      quoteBgc: "hsl(60, 40%, 100%)",
      quoteTitle: "hsl(0, 1%, 38%)",
      quoteBody: "hsl(0, 1%, 38%)",
      quoteBorder: "hsl(0, 0%, 87%)",
      border: "hsl(0, 0%, 87%)",
    }
  }
  themeData.themes.push(newTheme);
  console.log(themeData.themes);
  setSelectedTheme(newTheme);
  setAllThemesList(themeData.themes)
  setToLocalStorage("current-theme", newTheme);
  setToLocalStorage("all-themes", themeData.themes);
}

export const getFromLocalStorage = key => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
}