import React from 'react';
import HeroCard from './components/HeroCard';
import { HeroGraph } from './components/HeroGraph';
import { globalStyles } from './utils/globalStyles';
import { useAppSelector } from './utils/hooks';
import Layout from './components/Layout';
import Nav from './components/Nav';
import { Flex } from './stitches/Flex';
import HeroInfo from './components/HeroInfo';
import { Dialog as ModalRoot } from '@radix-ui/react-dialog';

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
        wrap={'noWrap'}
        css={{
          width: '$full',
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
