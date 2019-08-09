import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
    link = e => {
        this.props.onClick(e.target.innerText);
    }

    render(){

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats' onClick={this.link}>Cats</NavLink></li>
                <li><NavLink to='/dogs'onClick={this.link}>Dogs</NavLink></li>
                <li><NavLink to='/computers' onClick={this.link}>Computer</NavLink></li>
            </ul>
        </nav>

    );}
}

export default Nav;
