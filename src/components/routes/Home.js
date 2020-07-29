import '../components.css'
import React from 'react';

import one from '../../assets/one.jpg';

class Home extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="sub-header">
                    Welcome to LowestEver
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i  className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <img className="card" src={one} alt="one"/>
                        <div className="card">hey</div>
                        <div className="card">hey</div>
                        <div className="card">hey</div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>   
                </div>

                <br />
                <div className="sub-header">
                    Buying Guides
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <div className="sub-header">
                    Electronics
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <div className="sub-header">
                    Grocery
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <div className="sub-header">
                    Households
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <div className="sub-header">
                    Kids
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <div className="sub-header">
                    Fashions
                </div>

                <div className="sub-content">
                    <button id="left">
                        <i className="chevron circle left icon"></i>
                    </button>
                    <div className="slider">
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                    <button id="right">
                        <i className="chevron circle right icon"></i>
                    </button>
                </div>

                <br />
                <br />
                
            </div>
        );
    }
}

export default Home;
