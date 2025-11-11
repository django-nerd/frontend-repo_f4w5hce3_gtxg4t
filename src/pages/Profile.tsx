import React from 'react'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/primitives/Card'

export const Profile: React.FC = () => {
  return (
    <AppShell>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1.2fr 1fr' }}>
        <Card title="Your progress" subtitle="This week">
          <div style={{ height: 120, background: 'linear-gradient(90deg, #dbeafe, #e9d5ff)', borderRadius: 12 }} />
        </Card>
        <Card title="Streak">
          <div style={{ fontSize: 32, fontWeight: 700 }}>7🔥</div>
          <p>Keep it up! Practice for 10 minutes today.</p>
        </Card>
      </div>
    </AppShell>
  )
}
