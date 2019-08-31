import React, { Component } from "react";

class SSC extends Component {
    
    state = {
        count: 4
    }
    incrementOne() {
        this.setState({count:5})
    }

    incrementOnePrevState= () => {
        this.setState((prevState) => {
            return {count: prevState.count -  1}
        })
    }

    test() {
        alert("Why some people are always sad")
    }
    
    render() {
    return (
        <div>
            <h1>Statistics count: {this.state.count}</h1>
            <button onClick={this.incrementOne.bind(this)}>Count</button>
            <button onClick={this.incrementOnePrevState.bind(this)}>Prev State Count</button>
            <button onClick={this.test}>Test</button>
        </div>
    );
  }
}
export default SSC;
