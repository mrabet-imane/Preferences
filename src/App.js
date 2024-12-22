import React ,{useEffect}from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/Store';
import Theme from './components/Theme';
import Language from './components/Language';
import Notifications from './components/Notifications';
import "./App.css"


const App = () => {
  const theme = useSelector(state => state.theme);
 useEffect(() => {
   document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'; }, [theme]);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestionnaire de Préférences</h1>
        <Theme />
        <Language />
       <Notifications /> 
      </div>
    </Provider>
  );
};

export default App;
