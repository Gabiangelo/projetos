import React from 'react';

class Exe1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " Name",
            lastName: "Name",
            age: 0 
        };

        this.updateMyState = this.updateMyState.bind(this);
    }

    updateMyState() {
        this.setState({ 
            name: "First Name",
            lastName: "Last Name",
            age: 31 
        })
    }
    

    render() {
        return (
            <div className='result'>
                <div>
                    <p>name: {this.state.name}</p>
                    <p>lastName: {this.state.lastName}</p>
                    <p>  lastName: {this.state.age}</p>
                </div>
                <button onClick={this.updateMyState}>updateMyState</button>
            </div>
        );
    }
}

export default Exe1