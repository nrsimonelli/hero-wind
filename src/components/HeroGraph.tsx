import React, { useEffect } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
} from 'recharts';
import { STAT_KEYS, STAT_OBJ } from '../constants';
import { Hero } from '../redux/slice/hero-api-slice';
import { Box } from '../stitches/Box';
import { Flex } from '../stitches/Flex';
import { useAppSelector } from '../utils/hooks';

type HeroProps = {
  id: number;
  name: string;
};

// interface GraphProps {
//   redHero: HeroProps;
//   blueHero: HeroProps;
// }

export const GraphBar = () => {
  const heroData = useAppSelector(
    (state) => state.heroDisplay.heroData
  );
  const redKey = heroData[0].name;
  const blueKey = heroData[1].name;

  const graphData: any[] = [];

  STAT_KEYS.forEach((stat) => {
    const value: any = { stat };
    heroData.forEach((hero: any) => {
      value[hero?.name] = hero?.powerstats[stat];
    });
    graphData.push(value);
  });

  return (
    <Flex
      justify={'center'}
      align={'center'}
      css={{ height: '$full', width: '$full' }}
    >
      <BarChart width={600} height={300} data={graphData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='stat' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          type='monotone'
          dataKey={redKey}
          fill={'#f5222d'}
          fillOpacity={0.8}
        />
        <Bar
          type='monotone'
          dataKey={blueKey}
          fill={'#1890ff'}
          fillOpacity={0.8}
        />
      </BarChart>
    </Flex>
  );
};

export const GraphArea = () => {
  // const heroOne = props.eggData[0];
  // const heroTwo = props.eggData[1];
  // const hero = props.eggData;

  // const keys = [
  //   'intelligence',
  //   'strength',
  //   'speed',
  //   'durability',
  //   'power',
  //   'combat',
  // ];

  // const result = [];

  // keys.forEach((stat) => {
  //   const statScore = { stat };
  //   hero.forEach((heroInfo) => {
  //     statScore[heroInfo.name] = heroInfo[stat];
  //   });
  //   result.push(statScore);
  // });

  return (
    <div className='graph'>
      <ResponsiveContainer height='100%' width='100%'>
        <AreaChart width={500} height={400} data={[]}>
          <defs>
            <linearGradient id='colorA1' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='#1890ff'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='#1890ff'
                stopOpacity={0}
              />
            </linearGradient>

            <linearGradient id='colorB1' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='#f5222d'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='#f5222d'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='stat' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey={''}
            stroke={'#1890ff'}
            fillOpacity={1}
            fill={'url(#colorA1)'}
            activeDot={{ r: 6 }}
          />
          <Area
            type='monotone'
            dataKey={''}
            stroke={'#f5222d'}
            fillOpacity={1}
            fill={'url(#colorB1)'}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
