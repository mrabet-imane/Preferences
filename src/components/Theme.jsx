import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/ActionCreators';
import  "../App.css"

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(initial_state => initial_state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
 
  
  return (
    
    <div>
      <h2 >Thème Actuel: {theme}</h2>
      <button onClick={handleToggleTheme}>
        Passer au {theme === "light" ? "Mode Sombre" : "Mode Clair"}
      </button>
    </div>
  );
};

export default Theme;
