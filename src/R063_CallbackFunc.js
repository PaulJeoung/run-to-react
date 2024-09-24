import React, {Component} from "react";

class R063_CallbackFunc extends Component {
    componentDidMount() {
        this.logPrint(1, function(return1) {
            console.log("return1 : " + return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : " + return2);
            //}.bind(this)); // 콜백에서 this로 바인딩
        })}.bind(this)) // 다시 콜백 할때 this로 바인딩
    }
    logPrint(param, callback) {
        console.log("logPrint param : " + param);
        param += param
        callback(param);
    }
    render() {
        return(
            <h3>Callback Function</h3>
        )
    }
}

export default R063_CallbackFunc;