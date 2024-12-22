import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNotifications } from '../redux/ActionCreators';
import  "../App.css"

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(initial_state => initial_state.notifications);

  const handleToggleNotifications = () => {
    dispatch(toggleNotifications());
  };

  return (
    <div>
      <h2>Notifications: {notifications ? "Activées" : "Désactivées"}</h2>
      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleToggleNotifications}
        />
        Activer/Désactiver les Notifications
      </label>
    </div>
  );
};

export default Notifications;
