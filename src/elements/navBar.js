import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {

    componentDidMount(){
        console.log('nav');
    }

    render(){
        return(
            <nav>
                Nav
                <ul>
                    <li><Link to="/one">One</Link></li>
                    <li><Link to="/two">Two</Link></li>
                    <li><Link to="/three">Three</Link></li>
                </ul>
            </nav>
        )
    }
};

export default NavBar;
