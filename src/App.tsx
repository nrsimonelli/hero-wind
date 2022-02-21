import React, { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import { Button } from './stitches/Button';
import { Text } from './stitches/Text';
import { useGetHeroByIdQuery } from './redux/slice/hero-api-slice';
import { globalStyles } from './utils/globalStyles';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import Layout from './components/Layout';
import Nav from './components/Nav';
import { Container } from './stitches/Container';
import { Flex } from './stitches/Flex';
import { Box } from './stitches/Box';

const App = () => {
  globalStyles();
  const [heroBlue, setHeroBlue] = useState<number>(10);
  const [heroRed, setHeroRed] = useState<number>(30);

  return (
    <Layout>
      <Nav />
      <Container variant={'responsive'}>
        <Flex direction={'row'}>
          <HeroCard heroId={heroBlue} />
          <HeroCard heroId={heroRed} />
        </Flex>
        <Box
          css={{ width: '$9', height: '$8', bg: '$attention9' }}
        ></Box>
      </Container>
      <Button shape='5' variant={'outline'}>
        <Text>Learn More</Text>
      </Button>
    </Layout>
  );
};

export default App;
