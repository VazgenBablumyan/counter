 import React, { Component } from 'react'

 export default class Counter extends Component {
    constructor(props){
        super(props)

    }
    state = {
        counter:0,
    }
    inCrease=() => this.setState({counter:this.state.counter+1})
    deCrease=() => this.setState({counter:this.state.counter-1})
    reset=() => this.setState({counter:this.state.counter=0})


    
    render() {
     return (
       <div>
            <p>{this.state.counter}</p>
            <button onClick={this.inCrease}>Increase</button>
            <button onClick={this.deCrease}>Decrease</button>
            <button onClick={this.reset}>Reset</button>
       </div>
     )
   }
 }
 