/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|hover:bg|text|border)-(primary|warning|error|info|default)(-hover)?/,
    },
  ],
  theme: {
    extend: {
      colors: {
        mainApp: '#F7F1E8',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          light: 'var(--color-primary-light)',
          text: 'var(--color-primary-text)',
          bg: 'var(--color-primary-bg)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          hover: 'var(--color-warning-hover)',
          active: 'var(--color-warning-active)',
          light: 'var(--color-warning-light)',
          text: 'var(--color-warning-text)',
          bg: 'var(--color-warning-bg)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          hover: 'var(--color-success-hover)',
          active: 'var(--color-success-active)',
          light: 'var(--color-success-light)',
          bg: 'var(--color-success-bg)',
          text: 'var(--color-success-text)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          hover: 'var(--color-error-hover)',
          active: 'var(--color-error-active)',
          light: 'var(--color-error-light)',
          bg: 'var(--color-error-bg)',
          text: 'var(--color-error-text)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral)',
          hover: 'var(--color-neutral-hover)',
          active: 'var(--color-neutral-active)',
          light: 'var(--color-neutral-light)',
          text: 'var(--color-neutral-text)',
          bg: 'var(--color-neutral-bg)',
          border: 'var(--color-neutral-border)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          hover: 'var(--color-info-hover)',
          active: 'var(--color-info-active)',
          light: 'var(--color-info-light)',
          text: 'var(--color-info-text)',
          bg: 'var(--color-info-bg)',
          border: 'var(--color-info-border)',
        },
      },
      fontSize: {
        base: 'var(--font-size)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
      },
      rounded: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
    },
  },
  plugins: [],
}
