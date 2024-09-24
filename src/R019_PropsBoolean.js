import React, {Component} from "react";

class R019_PropsBoolean extends Component {
    render() {
        let {BooleanTrueFalse} = this.props;
        return (
            <div style={{padding:'0px'}}>
                {BooleanTrueFalse ? '2. 참 ' : '1. 거짓 '}
                {BooleanTrueFalse.toString()}
            </div>
        );
    }
}
export default R019_PropsBoolean;