import React, {Component} from "react";

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {StateString: 'react',};
    }

    StateChange = (flag) => {
        if (flag === 'direct') this.state.StateString =  '리액트';
            // this.forceUpdate(); // 적용하면 강제로 render() 호출
        if (flag === 'setState') this.setState({StateString: '뤼액트'});
    };
    render() {
        return(
            <div style={{ padding: '0px' }}>
                <button onClick={(e) => this.StateChange('direct', e)}>
                state 직접 변경
                </button>
                <button onClick={(e) => this.StateChange('setState', e)}>
                setState로 변경
                </button>
                <br />
                [State 변경하기] StateString : {this.state.StateString}
            </div>
            );
        }
}
export default R025_SetState;