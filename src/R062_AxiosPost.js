import React, {Component} from "react";
import axios from "axios";

class R062_AxiosPost extends Component {
    componentDidMount() {
        axios.post('http://date.jsontest.com', {
            a:'react', b: 200
        }).then (response => {alert(`R062_AxiosPost : ${response.data.date}`);})
    } // original code :  (response => {alert(response.data.date)})
    render() {
        return (
            <h3>axios post</h3>
        )
    }
}
export default R062_AxiosPost;