import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeUpdateContext = createContext()

export function useTheme() {
	return useContext(ThemeContext)
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	)
}
