import { createSelector } from '@reduxjs/toolkit';
import { PixelPaintStore } from '../../rootReducer';

export const getTools = (state: PixelPaintStore) => state.tools;

export const selectSelectedColor = createSelector(
  [getTools],
  ({ selectedColor }) => selectedColor
);

export const selectSelectedTool = createSelector(
  [getTools],
  ({ selectedTool }) => selectedTool
);
