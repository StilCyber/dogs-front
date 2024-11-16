import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: 1,
  name: "DefaultName",
  status: "",
  notes: "",
  friends: [],
  isLoading: true,
  isError: "",
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.status = action.payload.status
      state.notes = action.payload.notes
      state.friends = action.payload.friends
      state.isLoading = action.payload.isLoading
      state.avatar = action.payload.avatar
    },
  },
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
