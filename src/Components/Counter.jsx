import React, { Component } from 'react'
import './Counter.css'
export default class Counter extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        counter: 0,
        maxSize: 100,
        minSize: -100,
        step: 1,
        disabled: true
    }

    changeMaxSize = (event) => {
        this.setState({ maxSize: +event.target.value })
    }
    changeMinSize = (event) => {
        this.setState({ minSize: +event.target.value })
    }
    onChange = (event) => {
        this.setState({ step: +event.target.value })
        this.disabled()
    }
    disabled(reset) {
        if (reset) {
            this.setState({ disabled: true })
        }
        if (this.state.counter + this.state.step > 0) {
            this.setState({ disabled: false })
        }
        if (this.state.counter - this.state.step < 0) {
            this.setState({ disabled: true })
        }
    }
    changeCounter = (num) => {
        this.disabled()

        if (this.state.counter + num <= this.state.maxSize) {
            this.setState({ counter: this.state.counter + num })
        }
        if (this.state.counter + num >= this.state.minSize) {
            this.setState({ counter: this.state.counter + num })
        }
    }

    render() {
        return (
            <div className='counter'>
                <div className='changeValues'>
                    <div className='maxSize'>
                        <input type="Number" onChange={this.changeMaxSize} />
                        <p> Enter Maximum value</p>
                    </div>
                    <div className='minSize'>
                        <input type="Number" onChange={this.changeMinSize} />
                        <p> Enter Minimum value</p>
                    </div>
                    <div className='step'>
                        <input type="Number" onChange={this.onChange} value={this.state.step} />
                        <p> Enter Step</p>
                    </div>
                </div>
                <div >
                    <p className='number'>{this.state.counter}</p>
                    <button className='button' onClick={() => this.changeCounter(this.state.step)}>Increase</button>
                    <button className='button' onClick={() => this.changeCounter(-this.state.step)} disabled={this.state.disabled} >Decrease</button>
                    <button className='button' onClick={() => {
                        this.changeCounter(-this.state.counter)
                        this.disabled(true)
                    }} >
                        Reset</button>
                </div>      </div>

        )
    }
}
