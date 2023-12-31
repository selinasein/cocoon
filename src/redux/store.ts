import { configureStore } from "@reduxjs/toolkit";
import resumeProcessingSlice from "./features/resumeProcessingSlice";
import pathSlice from "./features/pathSlice";

export const store = configureStore({
  reducer: {
    resumeProcessingSlice,
    pathSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
