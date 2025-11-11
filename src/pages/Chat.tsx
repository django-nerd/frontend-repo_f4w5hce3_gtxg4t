import React, { useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/primitives/Card'
import { Button } from '../components/primitives/Button'

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ id: string; from: 'me' | 'bot'; text: string }[]>([
    { id: '1', from: 'bot', text: 'Welcome! Ask me anything about the lesson.' }
  ])
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: 'me', text }])
    setText('')
  }

  return (
    <AppShell>
      <Card title="Practice Chat">
        <div style={{ display: 'grid', gap: 8 }}>
          <div aria-live="polite" style={{ minHeight: 160 }}>
            {messages.map(m => (
              <div key={m.id} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{ background: m.from === 'me' ? '#dbeafe' : '#e5e7eb', padding: '8px 10px', borderRadius: 12, maxWidth: 420 }}>{m.text}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8 }}>
            <input aria-label="message" value={text} onChange={(e) => setText(e.currentTarget.value)} style={{ height: 40, borderRadius: 8, border: '1px solid #cbd5e1', padding: '0 12px' }} />
            <Button onClick={send}>Send</Button>
          </div>
        </div>
      </Card>
    </AppShell>
  )
}
