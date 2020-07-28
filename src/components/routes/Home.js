import '../components.css'
import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className="content" >
                <div className="sub-header">
                    Welcome to LowestEver
                </div>

                <div className="sub-content">
                    <i class="chevron circle left icon"></i>
                    <div className="slider">
                        <div className="card">hey</div>
                        <div className="card">hey</div>
                        <div className="card">hey</div>
                        <div className="card">hey</div>
                    </div>
                    <i class="chevron circle right icon"></i>
                </div>
            </div>
        );
    }
}

export default Home;
