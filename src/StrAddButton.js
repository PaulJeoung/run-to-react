import React, {Component} from "react";
import {connect} from 'react-redux';
import {add} from './actions';

class StrAddButton extends Component {
    // R081~R083 부분 
    render() {
        return (
            <input value='Add200' type="button" onClick = {this.props.addString} />
        )
    }
    // R078~R080 부분
    // render() {
    //     return (
    //         <input value='Add200' type="button" onClick={this.addString} />
    //     )
    // }
    // addString = () => {
    //     this.props.store.dispatch(add());
    // }
}
// R081~R083 부분 추가
let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProps)
    return{
        addString: () => dispatch(add())
    };
};
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);
// 기존
export default StrAddButton; 