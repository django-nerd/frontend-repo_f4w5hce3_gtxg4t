import React from 'react'
import styled from '@emotion/styled'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
}

const StyledButton = styled.button<Required<Pick<ButtonProps, 'variant' | 'size' | 'block'>> & { disabled?: boolean }>((props) => {
  const t = props.theme as any
  const base = {
    fontWeight: 600 as const,
    border: `1px solid ${t.color.border}`,
    borderRadius: t.radii.md,
    transition: `transform ${t.motion.fast} ${t.motion.easing}, background ${t.motion.normal} ${t.motion.easing}, color ${t.motion.normal} ${t.motion.easing}, border-color ${t.motion.normal} ${t.motion.easing}`,
    outline: 'none',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    width: props.block ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    textAlign: 'center' as const,
  }

  const sizes = {
    sm: { height: 32, padding: '0 12px', fontSize: 14 },
    md: { height: 40, padding: '0 16px', fontSize: 16 },
    lg: { height: 48, padding: '0 20px', fontSize: 18 }
  } as const

  const variants = {
    primary: {
      background: props.disabled ? 'rgba(37,99,235,0.4)' : t.color.accent,
      color: 'white',
      borderColor: 'transparent',
      '&:hover': { background: props.disabled ? undefined : t.color.accentHover },
      '&:active': { transform: props.disabled ? undefined : 'translateY(1px)' }
    },
    secondary: {
      background: t.color.surface,
      color: t.color.text,
      '&:hover': { background: t.color.subtleSurface },
    },
    ghost: {
      background: 'transparent',
      color: t.color.text,
      borderColor: 'transparent',
      '&:hover': { background: t.color.subtleSurface },
    }
  } as const

  return {
    ...base,
    ...sizes[props.size],
    ...variants[props.variant],
    boxShadow: t.shadow.sm,
    ':focus-visible': { boxShadow: `0 0 0 3px ${t.color.accent}55` }
  }
})

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', block = false, children, ...rest }) => {
  return (
    <StyledButton variant={variant} size={size} block={block} {...rest}>
      {children}
    </StyledButton>
  )
}
