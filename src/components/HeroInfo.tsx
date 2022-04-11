import React from 'react';
import { styled, keyframes } from '../stitches.config';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Flex } from '../stitches/Flex';
import { useAppSelector } from '../utils/hooks';
import { Button } from '../stitches/Button';
import { Box } from '../stitches/Box';
import { Text } from '../stitches/Text';
import HeroInfoAvatar from './HeroInfoAvatar';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$blackA9',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

function Content({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  ml: '$3',
  mb: 0,
  fontWeight: 500,
  color: '$base12',
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  mt: '$0',
  ml: '$3',
  color: '$base11',
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$main11',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$main4' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$main7` },
});

const HeroInfo = ({ tag }: { tag: 'Red' | 'Blue' }) => {
  const heroData = useAppSelector(
    (state) => state.heroDisplay.heroData
  );
  const isRed = tag === 'Red';
  const hero = isRed ? heroData[0] : heroData[1];

  const STAT_STYLE = [
    { label: 'intelligence', abbr: 'Int', color: 'main' },
    { label: 'strength', abbr: 'Str', color: 'danger' },
    { label: 'speed', abbr: 'Spd', color: 'success' },
    { label: 'durability', abbr: 'Def', color: 'severe' },
    { label: 'power', abbr: 'Pow', color: 'accent' },
    { label: 'combat', abbr: 'Com', color: 'attention' },
  ];

  const aliasList = () => {
    const array = hero.biography.aliases ?? ['-'];
    const length = array.length;
    const ifNone = `Commonly known as ${hero.name}`;
    const ifOne = `Also known as ${hero.name}`;

    if (!length || array[0] === '-') {
      return ifNone;
    }
    if (length === 1) {
      return ifOne;
    }
    if (length === 2) {
      return `Also known as ${array.join(' & ')}`;
    }
    if (length >= 3) {
      return `Also known as ${array
        .join(', ')
        .replace(/, ([^,]*)$/, ' & $1')}`;
    }
  };

  const initials = (): string => {
    const x = hero.name;
    if (x.split(' ').length < 2) {
      return x.slice(0, 2);
    }
    const letters = x
      .split(' ')
      .map((name: any[]) => name[0])
      .join('');
    return letters;
  };

  const height = hero.appearance.height
    ? hero.appearance.height[0]
    : 'Unknown';
  const weight = hero.appearance.weight
    ? hero.appearance.weight[0]
    : 'Unknown';
  const origin = hero.biography.placeOfBirth || 'Unknown';
  const intro = hero.biography.firstAppearance || 'Unknown';
  const publisher = hero.biography.publisher || 'Unknown';

  const BioText = styled(Text, {
    fontSize: '$1',
    lineHeight: '$2',
  });

  return (
    <DialogContent>
      {!heroData ? (
        'Loading'
      ) : (
        <>
          <Flex direction={'row'} align={'center'}>
            <HeroInfoAvatar
              image={hero.images.sm}
              altText={hero.name}
              fallback={initials}
            />
            <Flex
              direction={'column'}
              align={'start'}
              css={{ width: '$full' }}
            >
              <DialogTitle>
                {hero.biography.fullName || hero.name}
              </DialogTitle>
              <DialogDescription>{aliasList()}</DialogDescription>
            </Flex>
          </Flex>

          <Flex direction={'row'} css={{ mt: '$3' }}>
            <Box css={{ width: '50%', pr: '$3' }}>
              <BioText>
                <b>Origin:</b>{' '}
                {origin === '-' || 0 ? 'Unknown' : origin}
              </BioText>
              <BioText>
                <b>Introduction:</b>{' '}
                {intro === '-' || 0 ? 'Unknown' : intro}
              </BioText>
              <BioText>
                <b>Publisher:</b>{' '}
                {publisher === '-' || 0 ? 'Unknown' : publisher}
              </BioText>
              <BioText>
                <b>Height:</b>{' '}
                {height === '-' || 0 ? 'Unknown' : height}
              </BioText>
              <BioText>
                <b>Weight:</b>{' '}
                {weight === '- lb' || 0 ? 'Unknown' : weight}
              </BioText>
            </Box>
            <Box css={{ width: '50%' }}>
              {STAT_STYLE.map((entry, index) => (
                <Flex
                  key={entry.label}
                  direction={'row'}
                  align={'center'}
                >
                  <Text
                    size={'1'}
                    css={{ width: '60px', lineHeight: '$2' }}
                  >
                    {entry.abbr}
                  </Text>
                  <Flex
                    css={{
                      width: '100%',
                      bg: `$${entry.color}4`,
                      borderRadius: '$4',
                    }}
                  >
                    <Box
                      css={{
                        bg: `$${entry.color}9`,
                        width: `${hero?.powerstats[entry.label]}%`,
                        height: '8px',
                        borderRadius: '$4',
                      }}
                    ></Box>
                  </Flex>
                </Flex>
              ))}
            </Box>
          </Flex>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogClose asChild>
              <Button aria-label='Close' variant={'primary'}>
                Return
              </Button>
            </DialogClose>
          </Flex>
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </>
      )}
    </DialogContent>
  );
};

export default HeroInfo;
