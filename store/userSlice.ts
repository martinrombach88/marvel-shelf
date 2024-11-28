import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: string
  name: string
}

interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
  },
})

export const { addUser, setUsers } = userSlice.actions
export default userSlice.reducer
