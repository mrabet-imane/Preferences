import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  "../App.css"


const Language = () => {
  const dispatch = useDispatch();
  const langue = useSelector((state) => state.language);

  const handleChangeLanguage = (e) => {
    console.log(e.target.value);
    
    dispatch({type:'SET_LANGUAGE',language:e.target.value});
    
  };

  return (
    <div>
      <h3>langue choisir: {langue}</h3>
      <select  onChange={handleChangeLanguage}>
        <option value="Français">Français</option>
        <option value="English">English</option>
        <option value="Español">Español</option>
      </select>
    </div>
  );
};

export default Language;



// import React, { useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLanguage } from '../redux/ActionCreators';

// const Language = () => {
//   const dispatch = useDispatch();
//   const language = useSelector(initial_state => initial_state.language);

//   const handleChangeLanguage = (e) => {
//     dispatch(setLanguage(e.target.value));
//   };

//   return (
//     <div>
//       <h2>Langue Actuelle: {language}</h2>
//       <select value={language} onChange={handleChangeLanguage}>
//         <option value="fr">Français</option>
//         <option value="en">English</option>
//         <option value="es">Español</option>
//       </select>
//     </div>
//   );
// };

// export default Language;


