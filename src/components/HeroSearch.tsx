import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { STATIC_RECORDS } from '../constants';
import { getHeroData } from '../redux/slice/hero-display-slice';
import { styled } from '../stitches.config';
import { Box } from '../stitches/Box';
import { useAppDispatch } from '../utils/hooks';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

interface HeroProps {
  id: number;
  name: string;
}

const InputStyle = styled(Box, {
  overflow: 'hidden',
  position: 'relative',
  bg: '$base1',
  textAlign: 'left',
  width: '$full',
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

//"absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

const OptionsStyle = styled(Box, {
  position: 'relative',
  mt: '$1',
  // width: '160px',
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
  [`& > .combo-options > .option-default`]: {
    // px: '$1',
    //color: '$white',
  },
  [`& > .combo-options > .option-active`]: {
    // px: '$1',
    bg: '$main9',
    color: '$white',
  },
  // cursor-default select-none relative py-2 px-4 text-gray-700
  [`& > .combo-options > .option-empty`]: {
    pl: '$4',
    //color: '$white',
  },

  ['& .entry']: {
    pl: '$4',
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

  const handleChange = (newHero: HeroProps) => {
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
    <Box css={{ mt: '$3' }}>
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
    </Box>
  );
};

export default HeroSearch;
