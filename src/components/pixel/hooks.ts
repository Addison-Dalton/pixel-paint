import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectSelectedTool,
  selectSelectedColor
} from '../../services/tools/slice';
import { setPixelInMatrix } from '../../services/paint/slice';

export const usePixel = (row: number, col: number) => {
  const dispatch = useDispatch();
  const selectedTool = useSelector(selectSelectedTool);
  const selectedColor = useSelector(selectSelectedColor);
  const handleMouseDown = useCallback(() => {
    // TODO - other tools
    switch (selectedTool) {
      case 'brush':
        const pixel: Pixel = { color: selectedColor };
        dispatch(setPixelInMatrix({ row, col, pixel }));
        break;
      default:
        break;
    }
  }, [row, col, selectedColor, selectedTool, dispatch]);

  return { handleMouseDown };
};
