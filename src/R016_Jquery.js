import React, {Component} from "react";
import $ from 'jquery';

class R016_Jquery extends Component {
    input_alert = (e) => {
        var input_val = $('#inputId').val();
        console.log ("Aren`t studying jquery b4 class?")
        alert(input_val);
    };

    render() {
        return (
            <div>
                <h2>[THIS IS jquery]</h2>
                <input id='inputId' name='inputName'/>
                <button id='buttonId' onClick={(e) => this.input_alert(e)}>
                    jQuery Button
                </button>
            </div>
        );
    }
}
export default R016_Jquery;