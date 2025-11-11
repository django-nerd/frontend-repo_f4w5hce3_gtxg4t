import React from 'react'
import styled from '@emotion/styled'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/primitives/Button'
import { Text } from '../components/primitives/Text'

const Hero = styled.section((p) => {
  const t = p.theme as any
  return {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: 24,
    alignItems: 'center',
    padding: '40px 0',
  }
})

const Title = styled.h1((p) => {
  const t = p.theme as any
  return { fontSize: t.typography.h1, margin: '0 0 12px 0', letterSpacing: -0.2 }
})

const Panel = styled.div((p) => {
  const t = p.theme as any
  return {
    background: t.color.panel,
    border: `1px solid ${t.color.border}`,
    borderRadius: t.radii.lg,
    padding: 20,
    boxShadow: t.shadow.md,
    minHeight: 220,
  }
})

const Features = styled.ul({ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 8 })

export const Landing: React.FC = () => {
  return (
    <AppShell>
      <Hero>
        <div>
          <Title>Polished English, practiced with intention.</Title>
          <Text size="lg" muted>
            A calm studio to refine speaking, listening, and writing — with micro exercises and live conversation practice.
          </Text>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <Button>Try a free lesson</Button>
            <Button variant="secondary">Browse courses</Button>
          </div>
          <Features>
            <li>• Real-time transcript and gentle grammar tips</li>
            <li>• Short exercises designed for focus</li>
            <li>• Live classes with friendly feedback</li>
          </Features>
        </div>
        <Panel aria-label="hero demo">
          <Text muted>Demo conversation</Text>
          <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
            <div style={{ justifySelf: 'start', background: '#e0ecff', color: '#1d4ed8', padding: '10px 12px', borderRadius: 12 }}>Hello! Ready to begin?</div>
            <div style={{ justifySelf: 'end', background: '#e5e7eb', color: '#111827', padding: '10px 12px', borderRadius: 12 }}>Yes — let’s practice introductions.</div>
          </div>
        </Panel>
      </Hero>
    </AppShell>
  )
}
