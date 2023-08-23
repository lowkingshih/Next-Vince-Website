'use client'

import React from 'react';
import { useTheme } from "next-themes";
import { IconContext } from 'react-icons';
import { RxSun } from "react-icons/rx"
import { MdOutlineDarkMode } from "react-icons/md";

// The ThemeSwitcher component is a button that toggles the theme between light and dark mode.

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const handleClick = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(nextTheme);
    }
    return (
        <>
            <button onClick={handleClick}>
                <IconContext.Provider 
                    value={{
                        size: '20px', 
                    }}
                >
                    {
                        theme === 'light' 
                            ? <MdOutlineDarkMode />
                            : <RxSun />
                    }
                </IconContext.Provider>
            </button>
        </>
    );
};

export default ThemeSwitcher