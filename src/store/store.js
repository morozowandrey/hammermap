import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import initialProjects from "../mocks/content";

const initialState = {
  projects: initialProjects,
  showNextButton: false,
};

const appSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    setNextButtonVisibility(state, action) {
      state.showNextButton = action.payload.showNextButton;
    },
  },
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const appActions = appSlice.actions;
export default store;

// const projectsRedcer = (state = { projects: initialProjects, showNextButton: false }, action) => {

//   if (action.type === 'SHOW_BTN') {
//     state.showNextButton = action.payload
//   }

//   return state
// }

// const store = createStore(projectsRedcer)

// export default store
