import React, {useState, useEffect} from 'react';
import axios from 'axios';

import UserOverview from './UserOverview';

function HomePage(props) {

  const [userInfos, setUserInfos] = useState([]);
  
  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      setUserInfos(result.data);
    })
  }, []);
  
  return (
      <div>
          {
            props.currentUser.username ?
            <h2>Hi, { props.currentUser.username }</h2> :
            null
          }
          {
            userInfos.map(userInfo => {
              return <UserOverview id={ userInfo.id } />
            })
          }
      </div>
  );
}

export default HomePage;
