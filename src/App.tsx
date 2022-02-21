import React, { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import { Button } from './stitches/Button';
import { Text } from './stitches/Text';
import { useGetHeroByIdQuery } from './redux/slice/hero-api-slice';
import { globalStyles } from './utils/globalStyles';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import Layout from './components/Layout';
import Nav from './components/Nav';

const App = () => {
  globalStyles();
  const [heroBlue, setHeroBlue] = useState<number>(10);
  const [heroRed, setHeroRed] = useState<number>(30);

  return (
    <Layout>
      <Nav />
      <button>New Hero</button>
      <div>hero app</div>
      <HeroCard heroId={heroBlue} />
      <HeroCard heroId={heroRed} />
      <Button shape='5' variant={'outline'}>
        <Text>Learn More</Text>
      </Button>
    </Layout>
  );
};

export default App;
