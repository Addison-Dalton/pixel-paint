import { Box, Flex, Hide } from '@chakra-ui/react';

const App = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      minHeight="100%"
      height="100%"
      width="100%"
    >
      <Box width="100%" bg="orange.300">
        {'template header'}
      </Box>
      <Flex flexDirection="row" width="100%" maxWidth="1000px" gap="1">
        <Hide below="sm">
          <Box flex="1" bg="blue.100">
            {'template tools'}
          </Box>
        </Hide>
        <Box flex="3" bg="blue.300">
          {'template paint'}
        </Box>
        <Hide below="sm">
          <Box flex="1" bg="blue.100">
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
