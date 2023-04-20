import React from 'react';

class exe3 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name : "Sem Nome" };
        this.updateMyState = this.updateMyState.bind(this)
        this.myCallback = this.myCallback.bind(this)
    }

    updateMyState(myCallback){
        this.setState({ name: " First Name "}, () => myCallback(this.state.name))
    }

    myCallback(name) {
      console.log(name);
    }

    render() {
        return (
            <div className='result'>
                <div>
                    <p>name: {this.state.name}</p>
                </div>
                <button onClick={() => this.updateMyState(this.myCallback)}>Update My State</button>
            </div>
        );
    }
}

export default exe3