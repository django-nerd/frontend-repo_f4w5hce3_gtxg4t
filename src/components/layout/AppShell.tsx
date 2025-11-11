import React from 'react'
import styled from '@emotion/styled'
import { useThemeMode } from '../../theme/ThemeProvider'
import { Button } from '../primitives/Button'

const Header = styled.header((props) => {
  const t = props.theme as any
  return {
    position: 'sticky', top: 0, zIndex: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 64, padding: '0 20px',
    background: t.color.surface,
    borderBottom: `1px solid ${t.color.border}`,
    backdropFilter: 'saturate(140%) blur(10px)'
  }
})

const Brand = styled.div({ fontWeight: 700, letterSpacing: 0.2, fontSize: 18 })

const Main = styled.main({ padding: 20 })

const Footer = styled.footer((props) => {
  const t = props.theme as any
  return { borderTop: `1px solid ${t.color.border}`, padding: 20, color: t.color.textMuted }
})

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode, setMode } = useThemeMode()
  return (
    <div>
      <Header>
        <Brand>Studio English</Brand>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="ghost">Sign in</Button>
          <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>{mode === 'light' ? 'Dark' : 'Light'} mode</Button>
        </div>
      </Header>
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()} Studio English</Footer>
    </div>
  )
}
