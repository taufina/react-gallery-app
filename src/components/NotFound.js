import React from 'react';

// When the page is not found, show the below message.
const NotFound = (props) => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
}

export default NotFound;
