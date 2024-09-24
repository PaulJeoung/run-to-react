import React, {Component} from "react";
import Swal from 'sweetalert2';

class R056_Sweetalert2 extends Component {
    componentDidMount() {
        // Swal.fire ('1. SweetAlert')
        // alert ('2. alert()')
        Swal.fire('1. SweetAlert').then(result => {
            alert('2 result.value : ' + result.value) // then은 promise 비동기 함수, 이전 함수가 완료 되어야 then 이하가 진행됨
        })
    }
    render () {
        return (
            <h1>sweetalert2</h1>
        )
    }
}
export default R056_Sweetalert2;