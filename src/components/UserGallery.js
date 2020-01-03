import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imgStyle = {
    width: '120px',
    height: '100px'
}

const divStyle ={
    display: 'flex',
    alignItems: 'center',
}

function UserGallery(props) {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${props.id}`)
            .then(result => {
                setImages(result.data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading === true){
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div style={divStyle}>
            {
                images.map(image => {
                    return <img src={image} style={ imgStyle }/>
                })
            }
        </div>
    );
}

export default UserGallery;
