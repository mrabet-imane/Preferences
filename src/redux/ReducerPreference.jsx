const initialState = {
  theme: "light",
  language: "fr",
  notifications: true,
};

const reducerPreference = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case 'SET_LANGUAGE':
      return { ...state, language: action.language };
    case 'TOGGLE_NOTIFICATIONS':
      return { ...state, notifications: !state.notifications };
    default:
      return state;
  }
};

export default reducerPreference;
