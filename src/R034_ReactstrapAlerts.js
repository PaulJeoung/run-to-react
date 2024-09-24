import React, {Component} from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    Simple Alert [color : warninig]
                </Alert>
                <UncontrolledAlert color="warninig">
                    UncontrolledAlert [color : warninig]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;