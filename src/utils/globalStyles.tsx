import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    fontFamily: '$untitled',
    lineHeight: '$3',
    fontWeight: '$1',
    bg: '$base4',
    color: '$hiContrast',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: '$main11',
      textDecoration: 'underline',
    },
  },
});
