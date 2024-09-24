import React, {Component} from "react";

class R023_PropsNode extends Component {
    render() {
        return (
            <div style={{padding: '5px'}}>
                <p>이 문서는 부모.js 입니다</p>
                {this.props.children}
            </div>
        )
    }
}
export default R023_PropsNode;