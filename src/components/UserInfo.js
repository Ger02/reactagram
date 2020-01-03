import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';

const imgStyle = {
  height: '25vh',
  width: '200px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center'
};

function UserInfo(props) {

  const [username, setUsername] = useState('')
  const [profPic, setProfPic] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://insta.nextacademy.com/api/v1/users/${props.id}`)
      .then(result => {
        setUsername(result.data.username)
        setProfPic(result.data.profileImage)
        setIsLoading(false);
      })
  }, []);

  if (isLoading === true) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div>
      <Link to={`/users/${props.id}`}>{username}</Link>
      <img src={profPic} style={ imgStyle }/>
    </div>
  );
}

export default UserInfo;
