import React, { Component } from "react";

class R060_FetchPostOthers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            responseMessage: '',
            rawResponse: '' // 원본 응답 데이터를 저장할 상태 추가
        };
    }

    handleInputChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name })
        });

        const data = await response.json();
        this.setState({ 
            responseMessage: `Response ID: ${data.id}`, // 서버 응답 처리
            rawResponse: JSON.stringify(data, null, 2) // 원본 응답 데이터를 JSON 문자열로 변환
        });
    }

    render() {
        return (
            <div>
                <h3>POST Example</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {this.state.responseMessage && <p>{this.state.responseMessage}</p>}
                {this.state.rawResponse && (
                    <pre>{this.state.rawResponse}</pre> // raw 응답 데이터를 표시
                )}
            </div>
        );
    }
}
export default R060_FetchPostOthers;