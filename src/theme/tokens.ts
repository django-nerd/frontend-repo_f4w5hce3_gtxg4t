// Design tokens for Studio English
export type ThemeMode = 'light' | 'dark'

export const color = {
  light: {
    bg: '#0b0c0f', // used for shadows
    surface: '#ffffff',
    subtleSurface: 'rgba(255,255,255,0.6)',
    panel: 'rgba(255,255,255,0.72)',
    text: '#0f172a',
    textMuted: '#475569',
    border: 'rgba(2,6,23,0.12)',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    success: '#16a34a',
    warn: '#d97706',
    danger: '#dc2626'
  },
  dark: {
    bg: '#0b0c0f',
    surface: '#0f172a',
    subtleSurface: 'rgba(15,23,42,0.6)',
    panel: 'rgba(20,27,45,0.7)',
    text: '#e5e7eb',
    textMuted: '#94a3b8',
    border: 'rgba(148,163,184,0.2)',
    accent: '#60a5fa',
    accentHover: '#93c5fd',
    success: '#22c55e',
    warn: '#f59e0b',
    danger: '#ef4444'
  }
}

export const radii = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999
}

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48
}

export const shadow = {
  sm: '0 1px 2px rgba(0,0,0,0.06)',
  md: '0 6px 20px rgba(0,0,0,0.12)',
  lg: '0 20px 50px rgba(0,0,0,0.18)'
}

export const motion = {
  fast: '150ms',
  normal: '220ms',
  slow: '360ms',
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
}

export const typography = {
  fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"`,
  h1: 48,
  h2: 36,
  h3: 28,
  body: 16,
  small: 14
}
