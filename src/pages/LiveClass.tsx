import React from 'react'
import styled from '@emotion/styled'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/primitives/Card'
import { Button } from '../components/primitives/Button'
import { demoChat } from '../data/mock'

const Layout = styled.div({ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 })
const VideoArea = styled.div((p) => ({ height: 360, background: '#0f172a', borderRadius: (p.theme as any).radii.lg }))

export const LiveClass: React.FC = () => {
  return (
    <AppShell>
      <Layout>
        <div>
          <VideoArea aria-label="video placeholder" />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Button variant="secondary">Raise hand</Button>
            <Button>React 👍</Button>
          </div>
        </div>
        <Card title="Chat">
          <div style={{ display: 'grid', gap: 8 }}>
            {demoChat.map(m => (
              <div key={m.id} style={{ background: 'rgba(2,6,23,0.06)', padding: 8, borderRadius: 8 }}>
                <strong>{m.author}</strong> <span aria-hidden>·</span> <span aria-label={`sent at ${m.time}`}>{m.time}</span>
                <div>{m.text}</div>
              </div>
            ))}
          </div>
        </Card>
      </Layout>
    </AppShell>
  )
}
