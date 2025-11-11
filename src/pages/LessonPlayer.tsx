import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/primitives/Button'
import { Card } from '../components/primitives/Card'

const Layout = styled.div({ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 })
const Media = styled.div((p) => ({ height: 280, background: '#0f172a', borderRadius: (p.theme as any).radii.lg }))
const Transcript = styled.div((p) => ({ maxHeight: 280, overflow: 'auto' }))

const lines = [
  { t: 0, text: 'Welcome to the lesson on introductions.' },
  { t: 3, text: 'We will practice short answers.' },
  { t: 7, text: 'Repeat after me: My name is…' },
]

export const LessonPlayer: React.FC = () => {
  const [time, setTime] = useState(0)
  const intRef = useRef<number | null>(null)
  useEffect(() => { intRef.current = window.setInterval(() => setTime((t) => t + 1), 1000); return () => { if (intRef.current) window.clearInterval(intRef.current) } }, [])

  return (
    <AppShell>
      <Layout>
        <div>
          <Media aria-label="video placeholder" />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Button>Play</Button>
            <Button variant="secondary">Pause</Button>
          </div>
        </div>
        <Card title="Transcript">
          <Transcript>
            {lines.map((l, i) => (
              <p key={i} style={{ background: time >= l.t ? 'rgba(37,99,235,0.12)' : undefined, padding: '4px 8px', borderRadius: 8 }}>{l.text}</p>
            ))}
          </Transcript>
        </Card>
      </Layout>
    </AppShell>
  )
}
