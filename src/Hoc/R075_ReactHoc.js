import React from "react"
import withHocComponent from './withHocComponent';

class R075_ReactHoc extends React.Component {
    render() {
        console.log('2. HocComponent render')
        return(
            <h3>props.name : {this.props.name}</h3>
        )
    }
}

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')