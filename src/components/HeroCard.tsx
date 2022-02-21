import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetHeroByIdQuery } from '../redux/slice/hero-api-slice';
import { styled } from '../stitches.config';
import { Flex } from '../stitches/Flex';
import { Text } from '../stitches/Text';

const Img = styled('img', {
  // css here
});

const HeroCard = ({ heroId }: { heroId: number }) => {
  const { data, isLoading } = useGetHeroByIdQuery(heroId);
  return (
    <Flex>
      <Text>{data?.name}</Text>
      <Img src={data?.images.sm} />
    </Flex>
  );
};

export default HeroCard;
