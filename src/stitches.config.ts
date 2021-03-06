import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  blackA,
  whiteA,
  slate,
  amber,
  blue,
  green,
  purple,
  red,
  yellow,
} from '@radix-ui/colors';
import { SCREENS } from './constants';

export const {
  styled,
  config,
  theme,
  createTheme,
  globalCss,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...blackA,
      ...whiteA,
      ...blue,
      ...green,
      ...red,
      ...yellow,
      ...amber,
      ...purple,

      base1: '$slate1',
      base2: '$slate2',
      base3: '$slate3',
      base4: '$slate4',
      base5: '$slate5',
      base6: '$slate6',
      base7: '$slate7',
      base8: '$slate8',
      base9: '$slate9',
      base10: '$slate10',
      base11: '$slate11',
      base12: '$slate12',

      main1: '$blue1',
      main2: '$blue2',
      main3: '$blue3',
      main4: '$blue4',
      main5: '$blue5',
      main6: '$blue6',
      main7: '$blue7',
      main8: '$blue8',
      main9: '$blue9',
      main10: '$blue10',
      main11: '$blue11',
      main12: '$blue12',

      severe1: '$amber1',
      severe2: '$amber2',
      severe3: '$amber3',
      severe4: '$amber4',
      severe5: '$amber5',
      severe6: '$amber6',
      severe7: '$amber7',
      severe8: '$amber8',
      severe9: '$amber9',
      severe10: '$amber10',
      severe11: '$amber11',
      severe12: '$amber12',

      accent1: '$purple1',
      accent2: '$purple2',
      accent3: '$purple3',
      accent4: '$purple4',
      accent5: '$purple5',
      accent6: '$purple6',
      accent7: '$purple7',
      accent8: '$purple8',
      accent9: '$purple9',
      accent10: '$purple10',
      accent11: '$purple11',
      accent12: '$purple12',

      danger1: '$red1',
      danger2: '$red2',
      danger3: '$red3',
      danger4: '$red4',
      danger5: '$red5',
      danger6: '$red6',
      danger7: '$red7',
      danger8: '$red8',
      danger9: '$red9',
      danger10: '$red10',
      danger11: '$red11',
      danger12: '$red12',

      attention1: '$yellow1',
      attention2: '$yellow2',
      attention3: '$yellow3',
      attention4: '$yellow4',
      attention5: '$yellow5',
      attention6: '$yellow6',
      attention7: '$yellow7',
      attention8: '$yellow8',
      attention9: '$yellow9',
      attention10: '$yellow10',
      attention11: '$yellow11',
      attention12: '$yellow12',

      success1: '$green1',
      success2: '$green2',
      success3: '$green3',
      success4: '$green4',
      success5: '$green5',
      success6: '$green6',
      success7: '$green7',
      success8: '$green8',
      success9: '$green9',
      success10: '$green10',
      success11: '$green11',
      success12: '$green12',

      hiContrast: '$slate12',
      loContrast: '$slate11',

      black: '$blackA12',
      white: '$whiteA12',
    },
    space: {
      0: 0,
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '64px',
      7: '128px',
      8: '256px',
      9: '512px',
    },
    sizes: {
      0: 0,
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '64px',
      7: '128px',
      8: '256px',
      9: '512px',
      full: '100%',
      vh: '100vh',
      vw: '100vw',
      nav: '80px',
      bp1: SCREENS[1],
      bp2: SCREENS[2],
      bp3: SCREENS[3],
      bp4: SCREENS[4],
      bp5: SCREENS[5],
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
      4: '21px',
      5: '27px',
      6: '35px',
      7: '59px',
      8: '72px',
      9: '96px',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'S??hne Mono, menlo, monospace',
    },
    fontWeights: {
      1: 400,
      2: 700,
      3: 900,
    },
    lineHeights: {
      1: 1,
      2: 1.25,
      3: 1.625,
    },
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '9999px',
    },
    shadows: {
      1: '0 0 4px rgba(0, 0, 0, .125)',
      2: '0 0 8px rgba(0, 0, 0, .125)',
      3: '0 0 16px rgba(0, 0, 0, .125)',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '999',
    },
    transitions: {},
  },
  media: {
    bp1: `(min-width: ${SCREENS[1]})`,
    bp2: `(min-width: ${SCREENS[2]})`,
    bp3: `(min-width: ${SCREENS[3]})`,
    bp4: `(min-width: ${SCREENS[4]})`,
    bp5: `(min-width: ${SCREENS[5]})`,
  },
  utils: {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    square: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
      width: value,
    }),
  },
});
