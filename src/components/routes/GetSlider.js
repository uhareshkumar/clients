import React from 'react';

class GetSlider extends React.Component {
    render() {
        return(
            <div>
                <div className="sub-header">
                    {this.props.header}
                </div>
                <div className="sub-content">
                    <div id="left">
                        <i  className="angle left icon"></i>
                    </div>
                    <div className="slider">
                        {this.props.children}
                    </div>
                    <div id="right">
                        <i className="angle right icon"></i>
                    </div>   
                </div>
                <br />
            </div>
            
        );
    }
}

export default GetSlider;