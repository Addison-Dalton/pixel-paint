import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { usePixel } from './hooks';

type Props = Pixel & {
  size: number;
  row: number;
  col: number;
};

const StyledBox = styled(Box)`
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    border: 1px solid #bbbbbb;
    box-shadow: 2px 2px 10px black;

    :after {
      opacity: 0.3;
    }
  }

  ::after {
    content: '';
    display: block;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    height: 100%;
    width: 100%;
    background-color: grey;
  }
`;

const DEFAULT_COLOR = '#747171';

const Pixel: FC<Props> = ({ color, size, row, col }) => {
  const sizeInPixels = `${size}px`;
  const pixelColor = color || DEFAULT_COLOR;
  const { handleMouseDown } = usePixel(row, col);
  return (
    <StyledBox
      w={sizeInPixels}
      h={sizeInPixels}
      bgColor={pixelColor}
      onMouseDown={handleMouseDown}
    />
  );
};

export default Pixel;
