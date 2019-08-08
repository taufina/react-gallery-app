import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                        {this.props.photos.map(photo => 
                            <li key={photo.id}>
                                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
                            </li>
                        )}                    
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;




//  const PhotoContainer = (props) => {
//     // const results = {props};  //store data in results
//     // let photos = results.map(photo => 
//     //     <Photo url={photo.images.fixed_height.url} key={photo.id}/>    
        



//     // render() {
//         return (
//             <div className="photo-container">
//                 <h2>Results</h2>
//                 <ul>
//                     <li>    
//                         {this.props.photos.map(photo => 
//                         <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
//                         )}                    
//                     </li>
//                 </ul>
//             </div>

//         );
//     // }
// }
// export default PhotoContainer;

