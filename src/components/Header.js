import './components.css';

import React from 'react';
import logo from '../assets/logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
import GoogleAuth from './GoogleAuth';
import SearchBar from './SearchBar';
import {burgerMenu} from '../actions';

class Header extends React.Component {
    getAvatar = () => {
        if(this.props.auth.isSignedIn) {
            return(
                <img 
                    className="ui avatar image" 
                    src={this.props.auth.imageUrl} 
                    alt={this.props.auth.name}
                />
            );
        }
        return null;
    }

    render() {
        return(
            <header>
                <div className="logo">
                    <div className="burger" onClick={this.props.burgerMenu}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <SearchBar>
                    <GoogleAuth />
                    {this.getAvatar()}
                </SearchBar>
                
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth};
};

export default connect(mapStateToProps,{burgerMenu})(Header);