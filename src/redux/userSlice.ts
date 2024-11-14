import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../types/redux";
import { LoginDto } from "../types/dto/userDto";
import IUser from "../types/user.interface";

const initialState: userState = {
    error: null,
    status: DataStatus.IDLE,
    user: null,
  };

export const fetchLogin = createAsyncThunk('user/login',
    async (user: LoginDto, thunkApi) => {
        try {
            const getData = await fetch('http://localhost:3400/api/users/login', {
              method: 'post',
              headers : {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user)
            })
            if (getData.status != 200) {
                thunkApi.rejectWithValue("Can't login, please try again")
            }
            const data = await getData.json()
            localStorage.setItem('Authorization', data.token)
            return data
        } catch (err) {
            thunkApi.rejectWithValue("Can't login, please try again")
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
      },
    },
    extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
      builder
        .addCase(fetchLogin.pending, (state, action) => {
          state.status = DataStatus.LOADING;
          state.error = null;
          state.user = null;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
          state.status = DataStatus.SUCCESS;
          state.error = null;
          state.user = action.payload as unknown as IUser;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
          state.status = DataStatus.FAILED;
          state.error = action.error as string;
          state.user = null;
        })
    },
});
  
export default userSlice;