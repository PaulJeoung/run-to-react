import React, {Component} from "react";

class R065_Promise extends Component {
    componentDidMount() {
        new Promise((resolve, reject) => {
            // resolve("resolve Info")
            reject(Error("Error Info"))
        })
        .then (result => console.log("then " + result))
        .catch (result => console.log("catch "+ result));
    }
    render() {
        return(
            <h3>Promise Catch</h3>
        )
    }
}
export default R065_Promise;