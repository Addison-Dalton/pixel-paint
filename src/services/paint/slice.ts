import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPixelMatrix, changePixelMatrixCount } from './utils';

type ChangeBoxCount = {
  rowOrCal: 'row' | 'col';
  count: number;
};

type UpdatePixel = {
  row: number;
  col: number;
  pixel: Pixel;
};

const DEFAULT_ROW_COUNT = 12;
const DEFAULT_COL_COUNT = 12;

const initialState: PaintBox = {
  pixelSize: 40,
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
    setPixelInMatrix(state, action: PayloadAction<UpdatePixel>) {
      const { row, col, pixel } = action.payload;
      state.matrix[row][col] = pixel;
    },
    setBoxCount(state, action: PayloadAction<ChangeBoxCount>) {
      const { rowOrCal, count } = action.payload;
      state.rowCount = count;
      state.matrix = changePixelMatrixCount(state.matrix, rowOrCal, count);
    }
  }
});

export const { setPixelSize, setPixelInMatrix, setBoxCount } =
  paintBoxSlice.actions;
export * from './selectors';
export default paintBoxSlice.reducer;
