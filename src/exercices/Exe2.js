import React from 'react';

class exe2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name : " " };
        this.updateMyState = this.updateMyState.bind(this)
    }
    
    updateMyState(myCallback) {
        this.setState({ name:"myName"});
    }
    

    render() {
        return (
            <div className='result'>
                <div>
                    <p>name: {this.state.name}</p>
                </div>
                <button onClick={this.updateMyState}>updateMyState</button>
            </div>
        );
    }
}

export default exe2

