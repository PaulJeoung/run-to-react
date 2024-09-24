import React, {Component} from "react";
import Swal from "sweetalert2";

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, postionflag, e) => {
        Swal.fire({
            position: postionflag, // 아래 return에서 위치를 지정 하거나 이곳에서 top, top-left 등으로 직접 지정 가능
            icon: 'success', // 'success', 'warning', 'info', 'question' 등으로 변경 가능
            title: flag+'됐습니다', // 아래 return에서 flag +  내용 조합으로 표시
            showConfirmButton: false, // false일때 OK 버튼 없음, true 일때, OK 버튼으로 팝업 종료 가능
            timer: 1500 // timer 설정시 자동으로 팝업 종료
        })
    }
    render() {
        return(
            <>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('저장', 'center-left')}>저장</button>
                <button onClick={e => this.saveAlert('수정', 'bottom-end')}>수정</button>
            </>
        )
    }
}
export default R057_Sweetalert2Position;