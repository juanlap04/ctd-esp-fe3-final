// En globalcontext.jsx
import React, { createContext, useReducer, useMemo } from "react";

const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_API_DATA: "SET_API_DATA",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case actionTypes.SET_API_DATA:
      return { ...state, data: { apiData: action.payload } };
    case actionTypes.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export const initialState = {
  theme: "light",
  data: { apiData: [] },
  favorites: [],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
