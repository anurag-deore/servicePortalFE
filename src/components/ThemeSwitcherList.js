import React, { useState, useEffect } from 'react'
import { ThemeButton, ThemeContainer } from './styles/ThemeSwitching.styled';
import { light } from "./styles/Theme.styled";
import { setThemeToLocalStorage } from "../utils/storage";



const ThemeSwitcherList = ({ selectedTheme, setSelectedTheme }) => {
    const [name, setname] = useState("");
    const [header, setheader] = useState(light.colors.header);
    const [background, setBackground] = useState(light.colors.background);
    const [footer, setFooter] = useState(light.colors.footer);
    const [text, setText] = useState(light.colors.text);
    const [allThemesList, setAllThemesList] = useState([]);

    const HandleThemeChange = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem("current-theme", JSON.stringify(theme));
    };

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
        if (currentTheme) {
            setSelectedTheme(currentTheme);
        }
        const allThemes = JSON.parse(localStorage.getItem("all-themes"));
        if (allThemes) {
            setAllThemesList(allThemes);
        }
    }, [setSelectedTheme]);

    const handleChange = () => {
        setThemeToLocalStorage(name, header, background, footer, text, setSelectedTheme, setAllThemesList);
        setname("");
        setheader("#000fff");
        setBackground("#000fff");
        setFooter("#000fff");
        setText("#000fff");
    };
    return (
        <ThemeContainer>
            <span>Themes: </span>
            {
                allThemesList.map((item) => {
                    return (
                        <ThemeButton
                            key={item.name}
                            style={{ backgroundColor: item.colors.background }}
                            className={`${selectedTheme === item ? "active" : ""}`}
                            onClick={() => HandleThemeChange(item)}
                        >
                            <span
                                style={{ color: item.colors.text }}>A</span>
                        </ThemeButton>
                    )
                })
            }

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
        </ThemeContainer>
    )
}

export default ThemeSwitcherList