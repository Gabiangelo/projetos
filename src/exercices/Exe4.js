import React from 'react';

class exe4 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name : this.props.name};
        this.updateName = this.updateName.bind(this)
    }
    
    updateName() {
        this.setState({ name: "Other name" }); 
    }

    render() {
        return (
            <div className='result'>
                <div>
                    <p>name: {this.state.name}</p>
                </div>
                <button onClick={this.updateName}>Update Name</button>
            </div>
        );
    }
}

export default exe4