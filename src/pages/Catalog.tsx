import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { AppShell } from '../components/layout/AppShell'
import { Input } from '../components/primitives/Input'
import { Card } from '../components/primitives/Card'
import { Button } from '../components/primitives/Button'
import { courses } from '../data/mock'

const Grid = styled.div({ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 })

export const Catalog: React.FC = () => {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => courses.filter(c => c.title.toLowerCase().includes(q.toLowerCase())), [q])
  return (
    <AppShell>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Input placeholder="Search courses" value={q} onChange={(e) => setQ(e.currentTarget.value)} aria-label="search" />
      </div>
      <Grid>
        {filtered.map(c => (
          <Card key={c.id} title={c.title} subtitle={`${c.level} • ${c.lessons} lessons`}>
            <img src={c.cover} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginTop: 8 }} />
            <p style={{ marginTop: 8 }}>{c.summary}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <span aria-label={`rating ${c.rating}`}>⭐ {c.rating.toFixed(1)}</span>
              <Button variant="secondary">View</Button>
            </div>
          </Card>
        ))}
      </Grid>
    </AppShell>
  )
}
