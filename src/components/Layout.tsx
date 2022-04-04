import { Flex } from '../stitches/Flex';

const Layout = ({ children }: any) => {
  return (
    <Flex
      direction={'column'}
      justify={'start'}
      align={'center'}
      wrap={'wrap'}
      css={{ minHeight: '$vh', width: '$full' }}
    >
      {children}
    </Flex>
  );
};

export default Layout;
