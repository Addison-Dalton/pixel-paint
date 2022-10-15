import { combineReducers } from '@reduxjs/toolkit';

import paintBoxReducer from './services/paint/slice';

const rootReducer = combineReducers({
  paintBox: paintBoxReducer
})

export type PixelPaintStore = ReturnType<typeof rootReducer>;
export default rootReducer;