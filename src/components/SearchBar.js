import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchBar">
                <div className="ui icon input">
                    <input 
                        className="prompt" 
                        type="text" 
                        placeholder="Search products for best deals"
                    />
                    <i className="search icon"></i>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default SearchBar