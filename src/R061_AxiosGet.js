import React, {Component} from "react";
import axios from 'axios';

class R061_AxiosGet extends Component {
    componentDidMount() {
        axios.get('http://date.jsontest.com/')
        .then(response => {alert(`R061_AxiosGet : ${response.data.date}`);})
    } // Original Code : (response => {alert(response.data.date)}) 
    render() {
        return (
            <h3>axios get</h3>
        )
    }
}

export default R061_AxiosGet;