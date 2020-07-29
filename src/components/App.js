import React from 'react';
import { MemoryRouter, Route} from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Home from './routes/Home';
import Electroics from './routes/Electronics';
import Grocery from './routes/Grocery';
import HouseHolds from './routes/HouseHolds';
import Kids from './routes/Kids';
import Fashions from './routes/Fashions';
import BuyingGuides from './routes/BuyingGuides';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <MemoryRouter>
                <div>
                    <Header />
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/buying_guides" component={BuyingGuides}/> 
                    <Route path="/electronics" component={Electroics} />
                    <Route path="/grocery" component={Grocery} />
                    <Route path="/households" component={HouseHolds} />
                    <Route path="/kids" component={Kids} />
                    <Route path="/fashions" component={Fashions} />
                    <Footer />
                </div>

            </MemoryRouter>
        );
    }
}

export default App;