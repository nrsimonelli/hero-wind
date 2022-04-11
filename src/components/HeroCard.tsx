import React, { useEffect } from 'react';
import { useGetHeroByIdQuery } from '../redux/slice/hero-api-slice';
import { useAppDispatch } from '../utils/hooks';
import { styled } from '../stitches.config';
import { Flex } from '../stitches/Flex';
import { setHeroData } from '../redux/slice/hero-display-slice';
import HeroSearch from './HeroSearch';
import { Skeleton } from '../stitches/Skeleton';
import { Box } from '../stitches/Box';
import { RiInformationFill } from 'react-icons/ri';
import { DialogTrigger as ModalTrigger } from '@radix-ui/react-dialog';
import { Dialog as ModalRoot } from '@radix-ui/react-dialog';
import HeroInfo from './HeroInfo';

const Img = styled('img', {
  // css here
  mt: '$4',
  borderRadius: '$3',
  width: '160px',
  height: '240px',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '@bp4': {
    width: '320px',
    height: '480px',
  },
});

interface HeroProps {
  id: number;
  name: string;
}

const HeroCard = ({
  hero,
  tag,
}: {
  hero: HeroProps;
  tag: 'Red' | 'Blue';
}) => {
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetHeroByIdQuery(
    hero.id
  );

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setHeroData({ tag, data }));
    }
  }, [isLoading, data]);

  const isRed = tag === 'Red';

  return (
    <Flex
      direction={{ '@initial': 'column', '@bp4': 'columnReverse' }}
      align={'center'}
      justify={'start'}
      css={{
        px: '$3',
        position: 'relative',
      }}
    >
      <ModalRoot>
        {isLoading || isFetching ? (
          <Skeleton />
        ) : (
          <>
            <Img src={data?.images.md} />
            <ModalTrigger asChild>
              <Box
                css={{
                  position: 'absolute',
                  right: '18px',
                  top: '22px',
                  fontSize: '$4',
                  '@bp4': {
                    fontSize: '$5',
                    top: 'auto',
                    right: '20px',
                    bottom: '-8px',
                  },
                  ['& .icon-blue']: {
                    color: '$main9',
                    borderRadius: '$5',
                    boxShadow: '$3',
                    bg: '$white',
                    '&:hover': {
                      color: '$main10',
                    },
                  },
                  ['& .icon-red']: {
                    color: '$danger9',
                    borderRadius: '$5',
                    boxShadow: '$3',
                    bg: '$white',
                    '&:hover': {
                      color: '$danger10',
                    },
                  },
                }}
              >
                <RiInformationFill
                  className={isRed ? 'icon-red' : 'icon-blue'}
                />
              </Box>
            </ModalTrigger>
          </>
        )}
        <HeroSearch hero={hero} tag={tag} />
        <HeroInfo tag={tag} />
      </ModalRoot>
    </Flex>
  );
};

export default HeroCard;
