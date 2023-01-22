import React, { useState } from 'react';

export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const userData = {
      updadeUserDetail: (data) => setUserData({...userData, ...data})
    }
    const [user, setUserData] = useState(userData);
    
    return (
      <UserContext.Provider value={user}>
        {props.children}
      </UserContext.Provider>
    )
  }