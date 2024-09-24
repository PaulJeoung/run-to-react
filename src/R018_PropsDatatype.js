import React, {Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return (
            <div style={{padding:'5px', color: "blue"}}>
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                <span>BooleanProps : {Boolean.toString()}</span>
                <p>ArrayProps : {Array.toString()}</p>
                <p>ObjectJSONProps : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.string, // string
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.number, // array
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;