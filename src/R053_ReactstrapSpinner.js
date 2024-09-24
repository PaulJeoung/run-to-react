import React, { Component} from "react";
import { Spinner } from "reactstrap";

class R053_ReactstrapSpinner extends Component {
    render() {
        return (
            <>
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner type="grow" color="dark" /> {/* grow : 원이 커졌다가 사라지는 디자인 */}
            <Spinner type="grow" color="info" />
            <Spinner type="sm" color="primary" />
            <Spinner style={{width : '10rem', height : '0.5rem'}} color="dark"/>
            <Spinner style={{width : '10rem', height : '10rem'}} color="secondary"/>
            <Spinner style={{width : '3rem', height : '0.5rem'}} type="grow" color="primary"/>
            </>
        )
    }
}

export default R053_ReactstrapSpinner;