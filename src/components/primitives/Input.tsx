import React from 'react'
import styled from '@emotion/styled'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

const Wrapper = styled.label((props) => {
  const t = props.theme as any
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: `1px solid ${t.color.border}`,
    borderRadius: t.radii.md,
    padding: '0 12px',
    height: 40,
    background: t.color.surface,
    boxShadow: t.shadow.sm,
    ':focus-within': { boxShadow: `0 0 0 3px ${t.color.accent}55` }
  }
})

const Field = styled.input((props) => {
  const t = props.theme as any
  return {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 16,
    background: 'transparent',
    color: t.color.text,
    '::placeholder': { color: t.color.textMuted }
  }
})

export const Input: React.FC<InputProps> = ({ leading, trailing, ...rest }) => {
  return (
    <Wrapper>
      {leading}
      <Field {...rest} />
      {trailing}
    </Wrapper>
  )
}
