import React,{Component} from "react";

/*
    콘솔창 출력 확인을 위해 RefFocus, JavascriptFocus 수정함
    주석 처리된 부분이 original code
*/
class R073_ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }
    RefFocus = (e) => {
        // this.InputRef.current.focus();
        var val1 = this.InputRef.current.focus();
        console.log ("Ref Focus : "+val1);
        e.preventDefault(); // 새로 고침 방지
    }
    JavascriptFocus(e) {
        // document.getElementById('id').focus();
        var val2 = document.getElementById('id').focus();
        console.log("Javascript Focus : "+val2);
        e.preventDefault(); // 새로 고침 방지
    }
    render() {
        return(
            <>
                <input id="id" type="text" ref={this.InputRef} />
                <input type="button" value="Ref Focus" onClick={this.RefFocus} />
                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus} />
            </>
        )
    }
}
export default R073_ReactRef;