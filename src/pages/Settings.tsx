import React from 'react'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/primitives/Button'
import { useThemeMode } from '../theme/ThemeProvider'

export const Settings: React.FC = () => {
  const { mode, setMode } = useThemeMode()
  return (
    <AppShell>
      <h1>Settings</h1>
      <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
        <div>
          <label htmlFor="theme">Theme</label>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Button variant={mode === 'light' ? 'primary' : 'secondary'} onClick={() => setMode('light')}>Light</Button>
            <Button variant={mode === 'dark' ? 'primary' : 'secondary'} onClick={() => setMode('dark')}>Dark</Button>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
