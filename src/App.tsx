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

  return (
    <Layout>
      <Nav />
      <Flex
        direction={{ '@initial': 'column', '@bp4': 'row' }}
        align={'center'}
        justify={'start'}
        wrap={'wrap'}
        css={{
          flex: '1 0 auto',
          width: '100%',
        }}
      >
        <Flex
          css={{
            mx: '$3',
          }}
        >
          <HeroCard hero={redHero} tag={'Red'} />
          <HeroCard hero={blueHero} tag={'Blue'} />
        </Flex>
        <HeroGraph />
      </Flex>
    </Layout>
  );
};

export default App;
