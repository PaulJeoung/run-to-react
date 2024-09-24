import React, { Component } from 'react';

class R006_Lifecycle extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.props_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3. reder Call');
        return (
            <h2>[THIS IS getDerivedStateFromProps FUNCTION]</h2>
        )
    }
}
export default R006_Lifecycle;