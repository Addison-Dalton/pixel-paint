import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ToolsStore = {
  selectedTool: 'brush',
  // TODO - fill in colors
  colorPalette: [],
  selectedColor: '#FFF'
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setSelectedColor(state, action: PayloadAction<string>) {
      state.selectedColor = action.payload;
    },
    setSelectedTool(state, action: PayloadAction<Tool>) {
      state.selectedTool = action.payload;
    }
  }
});

export const { setSelectedColor, setSelectedTool } = toolsSlice.actions;
export * from './selectors';
export default toolsSlice.reducer;
