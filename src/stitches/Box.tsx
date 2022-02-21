import { styled } from '../stitches.config';

export const Box = styled('div', {
  // local resets here

  variants: {
    variant: {
      1: { maxWidth: '$bp1' },
      2: { maxWidth: '$bp2' },
      3: { maxWidth: '$bp3' },
      4: { maxWidth: '$bp4' },
      5: { maxWidth: '$bp5' },
      6: { maxWidth: 'none' },
    },
    p: {
      0: { p: '$0' },
      1: { p: '$1' },
      2: { p: '$2' },
      3: { p: '$3' },
      4: { p: '$4' },
      5: { p: '$5' },
    },
    visible: {
      true: {
        boxShadow: 'inset 0 0 0 2px $colors$red9',
      },
    },
  },
  defaultVariants: {
    p: 0,
    visible: 'true',
  },
});
