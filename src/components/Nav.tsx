import { Container } from '../stitches/Container';
import { Flex } from '../stitches/Flex';
import { Text } from '../stitches/Text';

const Nav = () => {
  return (
    <Flex
      direction={'row'}
      align={'center'}
      css={{
        bg: '$main9',
        height: '$6',
        width: '$full',
        color: '$white',
      }}
    >
      <Container variant={'responsive'}>
        <Flex direction={'row'} justify={'between'}>
          <Text variant={'h1'}>Power Stats</Text>
          <Flex justify={'center'} align={'center'}>
            <svg
              width='36'
              height='36'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
export default Nav;
