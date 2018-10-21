import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="hello-world">
            </div>
        );
    }
}

export default HelloWorld;

