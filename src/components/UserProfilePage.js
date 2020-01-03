import React from 'react';
import { useParams } from 'react-router-dom';

import UserInfo from './UserInfo'
import UserGallery from './UserGallery'

function UserProfilePage() {

  const { id } = useParams()

  return (
    <div>
        <UserInfo id={id}/>
        <UserGallery id={id}/>
    </div>
  );
}

export default UserProfilePage;
