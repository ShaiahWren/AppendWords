import React, { Component } from 'react';

import { Button } from 'bloomer/lib/elements/Button';


class AppendWords extends Component {
    state = {
        input: '',
        output: []
    };


    _handleSubmit = async (event) => {
        event.preventDefault();
        const { input } = this.state;
        const newOutput = [...this.state.output, ' ', input] ;
        this.setState({
            input: '',
            output: newOutput
        });
    }

    _handleDecrease = async (event) => {
        event.preventDefault();
        const { input } = this.state;
        const newOutput = [...this.state.output, ' ', input] ;
        this.setState({
            input: '',
            output: newOutput
        });
    }

        _handleChange = (newInput) => {
            this.setState({
                input: newInput,
            });
        };

    render() {
        return (
            <>
                <h1>Make those sentences longer!</h1>
                <form onSubmit={this._handleSubmit}>

                    <input type="text" value={this.state.input} onChange={(event) => this._handleChange(event.target.value)}/>
                    <Button type="submit">Submit</Button>
                </form>
              
                

                <p>{this.state.output}</p>
                
            </>
        )
    }
}






export default AppendWords;