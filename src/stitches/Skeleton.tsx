import { styled, keyframes } from '../stitches.config';

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
});

export const Skeleton = styled('div', {
  backgroundColor: '$slate4',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$base6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      image: {
        mt: '$4',
        borderRadius: '$3',
        width: '160px',
        height: '240px',
        boxShadow: '$3',
      },
    },
  },
  defaultVariants: {
    variant: 'image',
  },
});
