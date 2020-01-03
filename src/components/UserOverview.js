import React from 'react';

import UserInfo from './UserInfo';
import UserGallery from './UserGallery';

const divStyle = {
    display: 'flex',
    marginBottom: '10px',
    background: '#eee',
    height: '30vh'
}

function UserOverview(props) {
  return (
      <div style={divStyle}>
          <UserInfo id={ props.id }/>
          <UserGallery id={ props.id }/>
      </div>
  );
}

export default UserOverview;
