import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId:'978046323845-odhku4o9ge2bved9dk2aus8eknna27vv.apps.googleusercontent.com',
                scope:'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            const gUser = this.auth.currentUser.get();
            const userId = gUser.getId();
            const name = gUser.getBasicProfile().getGivenName();
            const emailId = gUser.getBasicProfile().getEmail();
            const imageUrl = gUser.getBasicProfile().getImageUrl();

            this.props.signIn(userId, name, emailId, imageUrl);
        }
        else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.auth.isSignedIn) {
            return (
                <div className="login" onClick={this.onSignOut}>
                    <button className="ui red google button">
                        <i className="google icon left"></i>
                        Sign Out
                    </button>
                </div>
            );
        }
        else {
            return (
                <div className="login" onClick={this.onSignIn}>
                    <button className="ui red google button">
                        <i className="google icon left"></i>
                        Sign In
                    </button>
                </div>
            );
        }
    }

    render = () => { 
        return(<div> {this.renderAuthButton()} </div>);
    }
}

const mapstateToProps = (state) => {
    return {auth: state.auth};
};

export default connect(mapstateToProps, {signIn, signOut})(GoogleAuth);