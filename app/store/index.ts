import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./taskSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
