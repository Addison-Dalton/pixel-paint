import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';
import PaintApp from './scenes/app';

function App() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <PaintApp />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
