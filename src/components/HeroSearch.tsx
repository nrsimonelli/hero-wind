import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { STATIC_RECORDS } from '../constants';
import { getHeroData } from '../redux/slice/hero-display-slice';
import { styled } from '../stitches.config';
import { Box } from '../stitches/Box';
import { Button } from '../stitches/Button';
import { useAppDispatch } from '../utils/hooks';
import { SelectorIcon } from '@heroicons/react/solid';
import { ShuffleIcon } from '@radix-ui/react-icons';
import { Flex } from '../stitches/Flex';

interface HeroProps {
  id: number;
  name: string;
}

const InputStyle = styled(Box, {
  overflow: 'hidden',
  position: 'relative',
  bg: '$base1',
  textAlign: 'left',
  borderRadius: '$3',
  cursor: 'default',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  [`& > .combo-input`]: {
    py: '$2',
    pl: '$2',
    pr: '$4',
    border: 'none',
    width: '$full',
    fontSize: '$3',
  },
  [`& > .combo-button`]: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    pr: '$2',
    bg: 'inherit',
    border: 'none',
  },
  [`& > .combo-button > .combo-button-icon`]: {
    height: '20px',
    width: '20px',
  },
});

const OptionsStyle = styled(Box, {
  position: 'relative',
  mt: '$1',
  width: '$full',
  [`& > .combo-options`]: {
    width: '$full',
    position: 'absolute',
    pl: 0,
    py: '$1',
    mt: '$1',
    listStyle: 'none',
    overflow: 'auto',
    zIndex: '$2',
    bg: '$base1',
    borderRadius: '$3',
    boxShadow: '$3',
    maxHeight: '$7',
    fontSize: '$2',
    cursor: 'default',
    select: 'none',
  },
  [`& > .combo-options > .option-active`]: {
    bg: '$main9',
    color: '$white',
  },
  [`& > .combo-options > .option-empty`]: {
    pl: '$2',
  },
  ['& .entry']: {
    pl: '$2',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

const HeroSearch = ({
  hero,
  tag,
}: {
  hero: HeroProps;
  tag: 'Red' | 'Blue';
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();

  const isRed = tag === 'Red';

  const handleChange = (newHero: HeroProps) => {
    dispatch(getHeroData({ tag, newHero }));
  };

  const handleShuffle = () => {
    const index = Math.floor(Math.random() * STATIC_RECORDS.length);
    const newHero = STATIC_RECORDS[index];
    dispatch(getHeroData({ tag, newHero }));
  };

  const filteredRecords =
    searchQuery === ''
      ? STATIC_RECORDS
      : STATIC_RECORDS.filter((record) => {
          return record.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ''));
        });

  return (
    <Flex
      css={{
        mt: '$3',
        width: '160px',
        '@bp4': {
          width: '320px',
        },
      }}
    >
      <Button
        variant={isRed ? 'accent' : 'primary'}
        shape={'3'}
        size={'1'}
        css={{
          mt: '$1',
          mr: '$1',
          px: '$2',
          py: '$1',
          width: 'min-content',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
        onClick={handleShuffle}
      >
        <ShuffleIcon />
      </Button>
      <Combobox value={hero} onChange={handleChange}>
        <OptionsStyle>
          <InputStyle>
            <Combobox.Input
              className='combo-input'
              onChange={(event) => setSearchQuery(event.target.value)}
              displayValue={(record: HeroProps) => record.name}
            />
            <Combobox.Button className='combo-button'>
              <SelectorIcon
                className='combo-button-icon'
                aria-hidden='true'
              />
            </Combobox.Button>
          </InputStyle>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Combobox.Options className='combo-options'>
              {filteredRecords.length === 0 && searchQuery !== '' ? (
                <div className='option-empty'>Nothing found.</div>
              ) : (
                filteredRecords.map((record) => (
                  <Combobox.Option
                    className={({ active }) =>
                      active ? 'option-active' : 'option-default'
                    }
                    key={record.id}
                    value={record}
                  >
                    <span className={`entry`}>{record.name}</span>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </OptionsStyle>
      </Combobox>
    </Flex>
  );
};

export default HeroSearch;
