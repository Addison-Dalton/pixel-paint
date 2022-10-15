import { Box, Flex, Hide } from '@chakra-ui/react';

import PaintBox from '../paint-box';

const App = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      minHeight="100%"
      maxHeight="100%"
      height="100%"
      width="100%"
    >
      <Box width="100%" bg="orange.300">
        {'template header'}
      </Box>
      <Flex flexDirection="row" width="100%" maxWidth="1000px" gap="1">
        <Hide below="sm">
          <Box flex="1" width="150px" bg="blue.100">
            {'template tools'}
          </Box>
        </Hide>
        <Flex
          flex="3"
          flexDirection="column"
          alignItems="center"
          padding={4}
          overflow="auto"
          maxHeight="80vh"
        >
          <PaintBox />
        </Flex>
        <Hide below="sm">
          <Box flex="1" width="150px" bg="blue.100">
            {'template settings'}
          </Box>
        </Hide>
      </Flex>
      <Box width="100%" bg="orange.300">
        {'template footer'}
      </Box>
    </Flex>
  );
};

export default App;
