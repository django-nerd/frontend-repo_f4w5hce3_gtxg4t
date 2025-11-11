import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as EmotionThemeProvider, Global, css } from '@emotion/react'
import { color, motion, radii, shadow, spacing, typography, ThemeMode } from './tokens'

export type Theme = ReturnType<typeof buildTheme>

const buildTheme = (mode: ThemeMode) => ({
  mode,
  color: color[mode],
  radii,
  spacing,
  shadow,
  motion,
  typography
})

const ThemeContext = createContext<{ mode: ThemeMode; setMode: (m: ThemeMode) => void }>({ mode: 'light', setMode: () => {} })

export const useThemeMode = () => useContext(ThemeContext)

const globalStyles = (theme: Theme) => css`
  :root { color-scheme: ${theme.mode}; }
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.color.text};
    background: ${theme.mode === 'light' ? '#f6f7fb' : '#0b0c10'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  ::selection { background: ${theme.color.accent}; color: white; }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
  }
`

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light')
  useEffect(() => {
    const stored = localStorage.getItem('theme-mode') as ThemeMode | null
    if (stored) setMode(stored)
  }, [])
  const theme = useMemo(() => buildTheme(mode), [mode])
  const value = useMemo(() => ({ mode, setMode: (m: ThemeMode) => { localStorage.setItem('theme-mode', m); setMode(m) } }), [mode])
  return (
    <ThemeContext.Provider value={value}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={globalStyles(theme)} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
