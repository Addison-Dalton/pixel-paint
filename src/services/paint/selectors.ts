import { createSelector } from '@reduxjs/toolkit';
import { PixelPaintStore } from '../../rootReducer';

export const getPaintBox = (state: PixelPaintStore) => state.paintBox;

export const selectPixelMatrix = createSelector(
  [getPaintBox],
  ({ matrix }) => matrix
);

export const selectPaintBoxSize = createSelector(
  [getPaintBox],
  ({ rowCount, colCount }) => ({
    rowCount,
    colCount
  })
);

export const selectPixelSize = createSelector(
  [getPaintBox],
  ({ pixelSize }) => pixelSize
);
