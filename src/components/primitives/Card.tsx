import React from 'react'
import styled from '@emotion/styled'

export interface CardProps {
  as?: 'div' | 'section' | 'article'
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

const Shell = styled.div((props) => {
  const t = props.theme as any
  return {
    background: t.color.panel,
    backdropFilter: 'saturate(140%) blur(8px)',
    border: `1px solid ${t.color.border}`,
    borderRadius: t.radii.lg,
    boxShadow: t.shadow.md,
    padding: 16
  }
})

const Title = styled.h3((props) => {
  const t = props.theme as any
  return { margin: '0 0 6px 0', fontSize: 18, color: t.color.text }
})

const Subtitle = styled.p((props) => {
  const t = props.theme as any
  return { margin: 0, fontSize: 14, color: t.color.textMuted }
})

export const Card: React.FC<CardProps> = ({ as = 'div', title, subtitle, children }) => (
  <Shell as={as}>
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </Shell>
)
