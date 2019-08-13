import React from 'react';

//When user goes to a page that does not exist, the page shows this message.
export default function Error({history}){
    return(
        <div>
            <h2>Not Found</h2>
            <p>Sorry...This page doesn't exist.</p>
        </div>

    )

}