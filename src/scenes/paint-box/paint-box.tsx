import { useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';

import Pixel from '../../components/pixel';
import {
  selectPixelMatrix,
  selectPaintBoxSize,
  selectPixelSize
} from '../../services/paint/slice';

const PaintBox = () => {
  const matrix = useSelector(selectPixelMatrix);
  const { colCount } = useSelector(selectPaintBoxSize);
  const pixelSize = useSelector(selectPixelSize);

  return (
    <SimpleGrid
      gridTemplateColumns={`repeat(${colCount}, minmax(${pixelSize}px, ${pixelSize}px))`}
      gap={1}
    >
      {/* I tried using a flatMap here, but it always returned the row array */}
      {matrix.map((pixelRow, rowIndex) =>
        pixelRow.map((pixel, colIndex) => (
          <Pixel
            key={`pixel[${rowIndex}][${colIndex}]`}
            color={pixel?.color}
            size={pixelSize}
            row={rowIndex}
            col={colIndex} 
          />
        ))
      )}
    </SimpleGrid>
  );
};

export default PaintBox;
