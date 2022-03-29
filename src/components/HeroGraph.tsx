import React, { useState } from 'react';
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
import { STAT_KEYS } from '../constants';
import { Button } from '../stitches/Button';
import { Text } from '../stitches/Text';
import { Flex } from '../stitches/Flex';
import { useAppSelector } from '../utils/hooks';

export const HeroGraph = () => {
  const heroData = useAppSelector(
    (state) => state.heroDisplay.heroData
  );
  const redKey = heroData[0].name;
  const blueKey = heroData[1].name;

  const [showAltGraph, setShowAltGraph] = useState<boolean>(false);

  const graphData: any[] = [];

  STAT_KEYS.forEach((stat) => {
    const value: any = { stat };
    heroData.forEach((hero: any) => {
      value[hero?.name] = hero?.powerstats[stat];
    });
    graphData.push(value);
  });

  const handleClick = () => {
    setShowAltGraph(!showAltGraph);
  };

  const BarG = () => {
    return (
      <BarChart width={600} height={250} data={graphData}>
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
    );
  };

  const AreaG = () => {
    return (
      <AreaChart width={600} height={250} data={graphData}>
        <defs>
          <linearGradient id='colorA1' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#1890ff' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#1890ff' stopOpacity={0} />
          </linearGradient>

          <linearGradient id='colorB1' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#f5222d' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#f5222d' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='stat' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type='monotone'
          dataKey={redKey}
          stroke={'#f5222d'}
          fillOpacity={1}
          fill={'url(#colorB1)'}
          activeDot={{ r: 6 }}
        />
        <Area
          type='monotone'
          dataKey={blueKey}
          stroke={'#1890ff'}
          fillOpacity={1}
          fill={'url(#colorA1)'}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    );
  };

  return (
    <Flex
      justify={'center'}
      align={'center'}
      css={{ height: '$full', width: '$full' }}
    >
      <Button shape='5' variant={'outline'} onClick={handleClick}>
        <Text>Switch</Text>
      </Button>
      {showAltGraph ? <BarG /> : <AreaG />}
    </Flex>
  );
};

export const GraphArea = () => {
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
