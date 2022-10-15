import { ChakraProvider } from '@chakra-ui/react';

import PaintApp from './scenes/app';

function App() {
  return (
    <ChakraProvider>
      <PaintApp />
    </ChakraProvider>
  );
}

export default App;
