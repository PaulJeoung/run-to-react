import React, {Component} from "react";

// 응용해서 Body 값을 return 안에 보여 주고 싶을때, 주석 내용을 지우고 실행
class R059_FetchGet extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: ''// 초기 설정
    //     };
    // }
    componentDidMount = async () => {
        const response = await fetch ('http://date.jsontest.com/');
        const body = await response.json();
        alert(`R059_FetchGet : ${body.date}`) // Original Code : alert(body.date)
        // this.setState({data : body.date}); // 상태 업데이트 
    }
    render() {
        return (
            <div>
                <h3>fetch get</h3>
                {/* <p>Date : {this.state.data} </p> */}
            </div>
        )
    }
}
export default R059_FetchGet;