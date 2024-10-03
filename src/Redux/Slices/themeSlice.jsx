import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value === false ? state.value = true : state.value = false
    },
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer