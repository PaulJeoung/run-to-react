import React, {Component} from "react";

class R060_FetchPost extends Component {
    componentDidMount = async () => {
        const respose = await fetch('http://date.jsontest/com', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: {a:"react", b:200},
        });
        const body = await respose.json();
        alert(body.date)
    }
    render() {
        return (
            <div>
                <h1>fetch post</h1>
            </div>
        )
    }
}
export default R060_FetchPost;