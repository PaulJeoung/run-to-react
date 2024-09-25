import React, {Component} from "react";

/*
    https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event    
    React의 공식 문서에 따르면 onKeyPress는 deprecated(사용 중단 예정)
    onKeyDown 또는 onKeyUp을 사용을 권장
*/
class R071_onKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log('event : '+event+', value : '+val);
    }
    render() {
        return(
            <>
                onKeyDown : <input type="text" onKeyDown = {e => this.OnKey("onKeyDown", e)} /><br/>
                onKeyPress : <input type="text" onKeyPress = {e => this.OnKey("onKeyPress", e)} /><br/>
                onKeyUp : <input type="text" onKeyUp = {e => this.OnKey("onKeyPress", e)} /><br/>
            </>
        )
    }

}
export default R071_onKey;