import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/AuthService";
import { UserVerifySendParamsInterface } from "../../../services/services";

type LoadingState = "failed" | "idle" | "pending" | "success";

interface OneTimePasswordSlice {
  loadingState: LoadingState;
}

const initialState: OneTimePasswordSlice = {
  loadingState: "idle",
};

export const sendVerify = createAsyncThunk(
  "OneTimePassword/sendVerify",
  async ({ otp, email }: UserVerifySendParamsInterface, thunkAPI) => {
    try {
      const response = await AuthService.verifyOtp({ otp, email });

      // Full filled
      thunkAPI.fulfillWithValue(response.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const OneTimePasswordSlice = createSlice({
  name: "OneTimePassword",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendVerify.pending, (state, action) => {
      state.loadingState = "pending";
    });

    builder.addCase(sendVerify.fulfilled, (state) => {
      state.loadingState = "success";
    });

    builder.addCase(sendVerify.rejected, (state) => {
      state.loadingState = "failed";
    });
  },
});

export const {} = OneTimePasswordSlice.actions;

export default OneTimePasswordSlice.reducer;
