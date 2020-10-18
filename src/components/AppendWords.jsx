import React, { Component } from 'react';

import { Button } from 'bloomer/lib/elements/Button';


class AppendWords extends Component {
    state = {
        input: '',
        output: []
    };


    _appendText = () => {
        const { input, output } = this.state;
        let newOutput = [...output, input];
        
        this.setState({
            input: '',
            output: newOutput
        });
    }

    _deleteText = () => {
        const { output } = this.state;
        let newOutput = [...output] ;
        newOutput.pop();
        this.setState({
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
                <form>

                    <input type="text" value={this.state.input} onChange={(event) => this._handleChange(event.target.value)}/>
                    <Button type="button" onClick={this._appendText}>Append</Button>
                    <Button type="button" onClick={this._deleteText}>Delete</Button>

                </form>
              
                

                <p>{this.state.output.join(' ')}</p>
                
            </>
        )
    }
}






export default AppendWords;