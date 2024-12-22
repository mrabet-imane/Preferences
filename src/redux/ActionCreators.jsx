import { TOGGLE_THEME, SET_LANGUAGE, TOGGLE_NOTIFICATIONS } from './ActionTypes';


export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});


export const toggleNotifications = () => ({
  type: TOGGLE_NOTIFICATIONS,
});
