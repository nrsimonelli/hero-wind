import { Flex } from '../stitches/Flex';

const Layout = ({ children }: any) => {
  return (
    <Flex
      direction={'column'}
      justify={'start'}
      align={'center'}
      css={{ minHeight: '$vh' }}
    >
      {children}
    </Flex>
  );
};

export default Layout;
