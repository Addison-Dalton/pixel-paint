import { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = Pixel & {
  size: number;
};

const DEFAULT_COLOR = '#747171'

const Pixel: FC<Props> = ({ color, size }) => {
  const sizeInPixels = `${size}px`;
  const pixelColor = color || DEFAULT_COLOR;
  return (
    <Box w={sizeInPixels} h={sizeInPixels} bgColor={pixelColor}></Box>
  );
};

export default Pixel;