import { createContext, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import type { IconType } from 'react-icons/lib'


export const Themes = {
    light: {
        name: 'Light',
        colors: {
            border: 'border-gray-300',
            background: 'bg-gray-100',
            text: 'text-gray-900',
            button: 'bg-gray-800 text-white',
            element: 'bg-white ',
        },
        buttonLabel: 'Modo Escuro',
        icon: FaMoon,
        iconSize: 15

    },
    dark: {
        name: 'Dark',
        colors: {
            border: 'border-gray-700',
            background: 'bg-gray-900',
            text: 'text-gray-100',
            button: 'bg-gray-100 text-gray-900',
            element: 'bg-gray-800 ',
        },
        buttonLabel: 'Modo Claro',
        icon: CiLight,
        iconSize: 20


    }
}



export type ThemeContextType = {
    theme: {
        name: string,
        colors: {
            border: string,
            background: string,
            text: string,
            button: string,
            element: string,

        },
        buttonLabel: string,
        icon: IconType,
        iconSize: number
    },

    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type childrenType = {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: childrenType) => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme === 'light' ? Themes.light : Themes.dark
    })

    const toggleTheme = () => {

        setTheme(prevTheme => {
            const newTheme = prevTheme.name === 'Dark' ? Themes.light : Themes.dark
            localStorage.setItem('theme', newTheme.name.toLowerCase()
            )
            return newTheme
        })

    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
