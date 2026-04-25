/**
 * Font Size Design System
 * ----------------------
 * This module defines the standardized font sizes for the application.
 * Always use these values with the Text component to maintain consistency.
 *
 * Why REM?
 * --------
 * We use REM units instead of pixels because:
 * - Scales with user's browser font settings (accessibility)
 * - Easier responsive design implementation
 * - Consistent scaling across the application
 *
 * Size Reference:
 * --------------
 * xs   : 0.75rem  (12px) - Tiny text, footnotes
 * sm   : 0.875rem (14px) - Small text, captions
 * md   : 1rem     (16px) - Default body text
 * lg   : 1.125rem (18px) - Emphasized body text
 * xl   : 1.25rem  (20px) - Subheadings
 * 2xl  : 1.5rem   (24px) - Small headings
 * 3xl  : 1.75rem  (28px) - Medium headings
 * 4xl  : 1.875rem     (30px) - Large headings
 * 5xl  : 2.5rem   (40px) - Extra large headings

 */

export const fontSizes = {
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.125,
  xl: 1.25,
  '2xl': 1.5,
  '3xl': 1.75,
  '4xl': 1.875,
  '5xl': 2.5
}

export const fontSize = Object.entries(fontSizes).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `${value}rem`
  }),
  {}
)
