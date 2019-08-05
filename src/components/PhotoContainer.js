import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';



const PhotoContainer = (props) => {
    // const results = props.data;  //store data in results
    // let photos = results.map(photo => 
    //     <Photo url={photo.images.fixed_height.url}/>
    // );
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
            </ul>
        </div>

    );
}

export default PhotoContainer;

