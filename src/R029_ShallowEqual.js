import React, {Component} from "react";
import {shallowEqualArrays} from "shallow-equal";

class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
            log: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount() {
        const object = {react : '200'};
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', {react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : '
            + shallowEqualArrays(Array1, Array2));
        console.log('shallowEqualArrays(Array2, Array3) : '
            + shallowEqualArrays(Array2, Array3));
        this.logToState(`shallowEqualArrays(Array1, Array2) : ${shallowEqualArrays(Array1, Array2)}`);
        this.logToState(`shallowEqualArrays(Array2, Array3) : ${shallowEqualArrays(Array2, Array3)}`);
        this.setState({ StateString: 'react' });
    }

    logToState = (message) => {
        this.setState(prevState => ({
            log: prevState.log + message + '\n'
        }));
    };

    render() {
        console.log('reander() 실행')
        return (
            <div>
                <p>[SHALLOW EQUAL ARRAYS EXAMPLE]</p>
                <textarea 
                    value={this.state.log} 
                    readOnly 
                    rows={10} 
                    cols={50}
                />
            </div>
        )
    }
}
export default R029_ShallowEqual;