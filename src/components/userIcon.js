import React, { useState } from 'react';

import './userIcon.css'

function UserIcon() {
const [ notification , setNotification ] = useState(true)

  return(
    <div className="user_logged">
      {(notification)
        ?<div className="user_logged__notification"></div>
        : ''
        }
        <img src="assets/user.png" alt="user notification"/>
    </div>
  );
}

export default UserIcon;
