import React from 'react';

// This component shows the photo.
const Photo = ({url}) => {
    return (
        <li>
            <img src={url} alt="" />
        </li>

    );
}

export default Photo;

