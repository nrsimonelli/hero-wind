import React, { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import { HeroGraph } from './components/HeroGraph';
import { Button } from './stitches/Button';
import { Text } from './stitches/Text';
import { globalStyles } from './utils/globalStyles';
import { useAppSelector } from './utils/hooks';
import Layout from './components/Layout';
import Nav from './components/Nav';
import { Container } from './stitches/Container';
import { Flex } from './stitches/Flex';

const App = () => {
  globalStyles();
  const redHero = useAppSelector(
    (state) => state.heroDisplay.redHero
  );
  const blueHero = useAppSelector(
    (state) => state.heroDisplay.blueHero
  );
  const heroData = useAppSelector(
    (state) => state.heroDisplay.heroData
  );

  return (
    <Layout>
      <Nav />
      <Container variant={'responsive'}>
        <Flex direction={'row'}>
          <HeroCard hero={redHero} tag={'Red'} />
          <HeroCard hero={blueHero} tag={'Blue'} />
        </Flex>
        <HeroGraph />
      </Container>
    </Layout>
  );
};

export default App;
