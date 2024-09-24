import React, {Component} from "react";
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
    render() {
        let {ReactString, ReactNumber} = this.props;
        return (
            <div style={{padding:'5px'}}>
                {ReactString}
                {ReactNumber}
            </div>
        );
    }
}
R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
    // ReactString: datatype.string // 이걸 넣어야 콘솔에러가 사라지는데 왜? 때문에?
};

export default R021_PropsRequired;