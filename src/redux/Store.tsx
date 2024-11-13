import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";
import HomeSlice from "../pages/Homepage/slices/HomeSlice";


// import SearchReducer from "./reducer/SearchSlice";
import OneTimePasswordSlice from "../pages/OneTimePasswordVerify/slices/OneTimePasswordSlice";
import AuthSlice from "./AuthSlice";


export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    // candidateRecent: CandidateRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
    OneTimePassword: OneTimePasswordSlice,
}});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
