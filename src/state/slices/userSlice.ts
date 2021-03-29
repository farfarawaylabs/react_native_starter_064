import {createSlice} from '@reduxjs/toolkit';
import UserInterface from 'models/User';

export interface UserStateInterface {
  user: UserInterface | null;
  didSeeWalkthrough: boolean;
}

const initialState: UserStateInterface = {
  user: null,
  didSeeWalkthrough: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn(state, action: {payload: {user: UserInterface}}) {
      state.user = action.payload.user;
    },

    signOut(state) {
      state.user = null;
    },
    updateDidSeeWalkthrough(state, action: {payload: {value: boolean}}) {
      state.didSeeWalkthrough = action.payload.value;
    },
  },
});

export const {signIn, signOut, updateDidSeeWalkthrough} = userSlice.actions;

export default userSlice.reducer;
