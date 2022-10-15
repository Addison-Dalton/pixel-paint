import { combineReducers } from '@reduxjs/toolkit';

import paintBoxReducer from './services/paint/slice';
import toolsReducer from './services/tools/slice';

const rootReducer = combineReducers({
  paintBox: paintBoxReducer,
  tools: toolsReducer
});

export type PixelPaintStore = ReturnType<typeof rootReducer>;
export default rootReducer;
