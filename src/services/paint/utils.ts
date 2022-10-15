const createPixelRow = (rowCount: number) => {
  const pixelRow: Pixel[] = [];
  for (let i = 0; i < rowCount; i++) pixelRow[i] = { color: undefined };

  return pixelRow;
};

export const createPixelMatrix = (rowCount: number, colCount: number) => {
  const pixelMatrix: PixelMatrix = [];

  for (let i = 0; i < rowCount; i++) {
    pixelMatrix[i] = createPixelRow(rowCount);
  }

  return pixelMatrix;
};

// TODO I can't recall my arrays. It might be this will modify the array that gets passed
// into this function. If that's the case, and it does what we want, might be no need to return
// the array again.
export const changePixelMatrixCount = (
  matrix: PixelMatrix,
  rowOrCol: 'row' | 'col',
  newCount: number
) => {
  let countDelta = 0;
  switch (rowOrCol) {
    case 'row':
      countDelta = newCount - matrix.length;

      if (countDelta > 0) {
        for (let i = 0; i < countDelta; i++) {
          const newPixelRow = createPixelRow(matrix[0].length);
          matrix.push(newPixelRow);
        }
      }

      if (countDelta < 0) {
        matrix.splice(-matrix.length + countDelta, -countDelta);
      }

      return matrix;

    case 'col':
      countDelta = newCount - matrix[0].length;

      // returning here to avoid unncessarily looping through the matrix
      if (countDelta === 0) return matrix;

      matrix.forEach((row) => {
        if (countDelta > 0) {
          matrix.forEach((row) => {
            for (let i = 0; i < countDelta; i++) row.push({ color: undefined });
          });
        }

        if (countDelta < 0) {
          row.splice(-row.length + countDelta, -countDelta);
        }
      });

      return matrix;

    default:
      return matrix;
  }
};
