import { styled } from '../stitches.config';

export const Button = styled('button', {
  // local resets here
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTaphighlightColor: 'rgba(0,0,0,0)',
  py: '12px',
  px: '20px',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  // locally scoped colors for easy variants
  $$bc4: '$colors$blue4',
  $$bc5: '$colors$blue5',
  $$bc6: '$colors$blue6',
  $$bc7: '$colors$blue7',
  $$bc8: '$colors$blue8',
  $$bc9: '$colors$blue9',
  $$bc10: '$colors$blue10',
  $$bc11: '$colors$blue11',

  $$ac4: '$colors$red4',
  $$ac5: '$colors$red5',
  $$ac6: '$colors$red6',
  $$ac7: '$colors$red7',
  $$ac8: '$colors$red8',
  $$ac9: '$colors$red9',
  $$ac10: '$colors$red10',
  $$ac11: '$colors$red11',

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$$bc9',
        '&:hover': {
          backgroundColor: '$$bc10',
        },
        '&:active': {
          backgroundColor: '$$bc9',
        },
      },
      secondary: {
        color: '$$bc11',
        backgroundColor: '$$bc4',
        '&:hover': {
          backgroundColor: '$$bc5',
        },
        '&:active': {
          backgroundColor: '$$bc6',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $$bc11',
        },
      },
      outline: {
        bg: 'transparent',
        color: '$$bc11',
        boxShadow: 'inset 0 0 0 1px $$bc8',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $$bc9',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $$bc9, 0 0 0 1px $$bc9',
        },
      },
      accent: {
        color: '$white',
        backgroundColor: '$$ac9',
        '&:hover': {
          backgroundColor: '$$ac10',
        },
        '&:active': {
          backgroundColor: '$$ac9',
        },
      },
    },
    shape: {
      0: {
        borderRadius: '$0',
      },
      1: {
        borderRadius: '$1',
      },
      2: {
        borderRadius: '$2',
      },
      3: {
        borderRadius: '$3',
      },
      4: {
        borderRadius: '$4',
      },
      5: {
        borderRadius: '$5',
      },
    },
    size: {
      1: { fontSize: '$2' },
      2: { fontSize: '$3' },
      3: { fontSize: '$4' },
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: '2',
    shape: '1',
  },
});
