import React, { useEffect } from 'react';
import { useGetHeroByIdQuery } from '../redux/slice/hero-api-slice';
import { useAppDispatch } from '../utils/hooks';
import { styled } from '../stitches.config';
import { Box } from '../stitches/Box';
import { Flex } from '../stitches/Flex';
import { setHeroData } from '../redux/slice/hero-display-slice';
import HeroSearch from './HeroSearch';
import { Skeleton } from '../stitches/Skeleton';

const Img = styled('img', {
  // css here
  mt: '$4',
  borderRadius: '$3',
  width: '160px',
  height: '240px',
  boxShadow: '$3',
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
    console.log('in UE');
    if (data && !isLoading) {
      console.log('firing dispatch');
      dispatch(setHeroData({ tag, data }));
    }
  }, [isLoading, data]);

  useEffect(() => {
    console.log('FETCHING');
  }, [isFetching]);

  return (
    <Flex
      direction={'column'}
      align={'center'}
      css={{ width: '50%', mb: '$3' }}
    >
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        <Img src={data?.images.sm} />
      )}
      <HeroSearch hero={hero} tag={tag} />
    </Flex>
  );
};

export default HeroCard;
