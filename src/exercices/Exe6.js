import React from 'react';



class exe6 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { value : 0 };
        this.callAsyncFunction = this.callAsyncFunction.bind(this)
        this.asyncFunc = this.asyncFunc.bind(this)
    }
    
   
    async callAsyncFunction(asyncFunc) {
        const value = await asyncFunc();
        this.setState({value});
    }

   
    asyncFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(20);
        }, 2000);
    });
}


    render() {
        return (
            <div className='result'>
                <div>
                    <p>Value: {this.state.value}</p>
                </div>
                <button onClick={() => this.callAsyncFunction(this.asyncFunc)}>Call Async Function</button>
            </div>
        );
    }
}



export default exe6