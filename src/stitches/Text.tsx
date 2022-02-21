import { styled } from '../stitches.config';

export const Text = styled('span', {
  // local resets here
  display: 'block',

  variants: {
    variant: {
      title: {
        fontSize: '$7',
        fontWeight: '$3',
        lineHeight: '$2',
      },
      h1: {
        fontSize: '$6',
        fontWeight: '$2',
        lineHeight: '$2',
      },
      h2: {
        fontSize: '$5',
        fontWeight: '$2',
        lineHeight: '$2',
      },
      h3: {
        fontSize: '$4',
        fontWeight: '$2',
        lineHeight: '$2',
      },
      default: {
        fontSize: '$3',
        fontWeight: '$1',
        lineHeight: '$3',
      },
      bold: {
        fontSize: '$3',
        fontWeight: '$2',
        lineHeight: '$3',
      },
    },
    type: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      inherit: {
        textTransform: 'inherit',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
      8: {
        fontSize: '$8',
      },
      9: {
        fontSize: '$9',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
    my: {
      0: {
        my: '$0',
      },
      1: {
        my: '$1',
      },
      2: {
        my: '$2',
      },
      3: {
        my: '$3',
      },
      4: {
        my: '$4',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
