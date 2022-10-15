import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPixelMatrix, changePixelMatrixCount } from './utils';

type ChangeBoxCount = {
  rowOrCal: 'row' | 'col';
  count: number;
};

const DEFAULT_ROW_COUNT = 30;
const DEFAULT_COL_COUNT = 30;

const initialState: PaintBox = {
  pixelSize: 50,
  rowCount: DEFAULT_ROW_COUNT,
  colCount: DEFAULT_COL_COUNT,
  matrix: createPixelMatrix(DEFAULT_ROW_COUNT, DEFAULT_COL_COUNT)
};

const paintBoxSlice = createSlice({
  name: 'paintBox',
  initialState,
  reducers: {
    setPixelSize(state, action: PayloadAction<number>) {
      state.pixelSize = action.payload;
    },
    changeBoxCount(state, action: PayloadAction<ChangeBoxCount>) {
      const { rowOrCal, count } = action.payload;
      state.rowCount = count;
      state.matrix = changePixelMatrixCount(state.matrix, rowOrCal, count);
    }
  }
});

export const { setPixelSize, changeBoxCount } = paintBoxSlice.actions;
export * from './selectors';
export default paintBoxSlice.reducer;
