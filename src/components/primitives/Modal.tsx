import React, { useEffect } from 'react'
import styled from '@emotion/styled'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const Backdrop = styled.div((props) => {
  const t = props.theme as any
  return {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 16, zIndex: 50
  }
})

const Panel = styled.div((props) => {
  const t = props.theme as any
  return {
    width: 'min(640px, 100%)', background: t.color.surface,
    borderRadius: t.radii.lg, border: `1px solid ${t.color.border}`,
    boxShadow: t.shadow.lg, padding: 20
  }
})

const Title = styled.h2({ margin: '0 0 8px 0', fontSize: 20 })

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <Backdrop role="dialog" aria-modal="true" onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        {title && <Title>{title}</Title>}
        {children}
      </Panel>
    </Backdrop>
  )
}
