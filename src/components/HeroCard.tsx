import React, { useEffect } from 'react';
import { useGetHeroByIdQuery } from '../redux/slice/hero-api-slice';
import { useAppDispatch } from '../utils/hooks';
import { styled } from '../stitches.config';
import { Flex } from '../stitches/Flex';
import { setHeroData } from '../redux/slice/hero-display-slice';
import HeroSearch from './HeroSearch';
import { Skeleton } from '../stitches/Skeleton';
import { Box } from '../stitches/Box';

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

  return (
    <Flex
      direction={{ '@initial': 'column', '@bp4': 'columnReverse' }}
      align={'center'}
      justify={'start'}
      css={{
        px: '$3',
      }}
    >
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        <Img src={data?.images.md} />
      )}
      <HeroSearch hero={hero} tag={tag} />
    </Flex>
  );
};

export default HeroCard;
