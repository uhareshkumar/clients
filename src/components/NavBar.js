import './components.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {burgerMenu} from '../actions';

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navLinks">
                <ui>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/buying_guides">Buying Guides</Link></li>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/electronics">Electronics</Link></li>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/grocery">Grocery</Link></li>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/households">Households</Link></li>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/kids">Kids</Link></li>
                    <li onClick={this.props.burgerMenu}><Link className="navLink" to="/fashions">Fashions</Link></li>
                </ui>
            </nav>
        );
    }
}

export default connect(null,{burgerMenu})(NavBar);