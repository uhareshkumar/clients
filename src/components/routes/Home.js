import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    render() {
        return(
            <div>
                Welcome to LowestEver
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth};
};

export default connect(mapStateToProps)(Home);
