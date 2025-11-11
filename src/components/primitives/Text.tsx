import React from 'react'
import styled from '@emotion/styled'

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  muted?: boolean
  weight?: 400 | 500 | 600 | 700
}

const mapSize = (size: NonNullable<TextProps['size']>, t: any) => {
  switch (size) {
    case 'sm': return { fontSize: 14 }
    case 'md': return { fontSize: t.typography.body }
    case 'lg': return { fontSize: 18 }
    case 'xl': return { fontSize: 20 }
  }
}

const StyledText = styled.p<Required<Pick<TextProps, 'size' | 'muted' | 'weight'>>>((props) => {
  const t = props.theme as any
  return {
    margin: 0,
    color: props.muted ? t.color.textMuted : t.color.text,
    ...mapSize(props.size, t),
    fontWeight: props.weight,
    lineHeight: 1.6
  }
})

export const Text: React.FC<TextProps> = ({ as = 'p', size = 'md', muted = false, weight = 400, children, ...rest }) => {
  return (
    <StyledText as={as} size={size} muted={muted} weight={weight} {...rest}>
      {children}
    </StyledText>
  )
}
