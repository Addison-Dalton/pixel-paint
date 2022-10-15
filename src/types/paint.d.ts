type Pixel = {
  color: string | undefined;
};

type PixelMatrix = Pixel[][];

type PaintBox = {
  pixelSize: number; // size of each pixel in px
  rowCount: number; // number of x coord pixels
  colCount: number; // number of y coord pixels
  matrix: PixelMatrix; // matrix to track each pixel
};

type Tool = 'brush' | 'fill' | 'eyedrop';

type ToolsStore = {
  selectedTool: Tool
  colorPalette: string[];
  selectedColor: string;
};

// TODO - might move pixelSize, rowCount, and colCount to controls?
type Controls = {};
