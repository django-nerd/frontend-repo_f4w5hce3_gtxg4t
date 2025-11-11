import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

export interface TooltipProps {
  label: string
  children: React.ReactElement
}

const Bubble = styled.div((props) => {
  const t = props.theme as any
  return {
    position: 'absolute', bottom: '100%', left: '50%', transform: 'translate(-50%, -8px)',
    background: t.color.text, color: 'white', padding: '6px 8px', borderRadius: t.radii.sm,
    fontSize: 12, whiteSpace: 'nowrap', boxShadow: t.shadow.sm
  }
})

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={ref}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {open && <Bubble role="tooltip">{label}</Bubble>}
      {children}
    </div>
  )
}
