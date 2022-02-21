import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetHeroByIdQuery } from '../redux/slice/hero-api-slice';
import { styled } from '../stitches.config';
import { Flex } from '../stitches/Flex';
import { Text } from '../stitches/Text';

const Img = styled('img', {
  // css here
  borderRadius: '$3',
  width: '160px',
  height: '240px',
  boxShadow: '$3',
});

const HeroCard = ({ heroId }: { heroId: number }) => {
  const { data, isLoading } = useGetHeroByIdQuery(heroId);
  return (
    <Flex
      direction={'column'}
      align={'center'}
      css={{ width: '50%' }}
    >
      <Text variant={'h1'} css={{ my: '$3' }}>
        {data?.name}
      </Text>
      <Img src={data?.images.sm} />
    </Flex>
  );
};

export default HeroCard;
