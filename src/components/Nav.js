import React from 'react';
import {NavLink} from 'react-router-dom';


//This component shows the navigation links.  When you click the buttons, it automatically searches and shows the results.

class Nav extends React.Component{
    link = e => {
        this.props.onClick(e.target.innerText); 
    }

    render(){

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/performSearch/waterfalls' onClick={this.link}>Waterfalls</NavLink></li>
                <li><NavLink to='/performSearch/flowers'onClick={this.link}>Flowers</NavLink></li>
                <li><NavLink to='/performSearch/mountains' onClick={this.link}>Mountains</NavLink></li>
            </ul>
        </nav>

    );}
}

export default Nav;
