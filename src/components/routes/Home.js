import '../components.css'
import React from 'react';

import one from '../../assets/one.jpg';
import card from '../../assets/small-card.jpg';
import GetSlider from './GetSlider';

class Home extends React.Component {
    render() {
        return(
            <div className="content">
                
                <GetSlider header="Welcome to LowestEver">
                    <img className="card" src={one} alt="one"/>
                    <div className="card">hey</div>
                    <div className="card">hey</div>
                    <div className="card">hey</div>
                </GetSlider>
                
                <GetSlider header="Buying Guides">
                    <img className="small-card" src={card} alt="card" />
                    <img className="small-card" src={card} alt="card" />
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>

                <GetSlider header="Electronics">
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>

                <GetSlider header="Grocery">
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>

                <GetSlider header="Households">
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>
                
                <GetSlider header="Kids">
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>

                <GetSlider header="Fashions">
                    <img className="small-card" src={card} alt="card" />
                </GetSlider>

                <br /> 
            </div>
        );
    }
}

export default Home;
