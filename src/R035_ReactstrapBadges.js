import React,{Component} from "react";
import { Badge, Button } from "reactstrap";

// primary: 주 색상 (파란색), secondary: 보조 색상 (회색), success: 성공 (녹색)
// danger: 위험 (빨간색), warning: 경고 (노란색), info: 정보 (파란색)
// light: 밝은 색상 (연한 회색), dark: 어두운 색상 (짙은 회색)

class R035_ReactstrapBadges extends Component{
    render() {
        return (
            <div>
                <h1>PRODUCT NAME <Badge color="secondary"> hit </Badge></h1>
                <Button color="warning" outline>
                    Accessor <Badge color="dark"> 4 </Badge> {/* 버튼 안에 뱃지 적용*/}
                </Button>
                <Badge color="danger" pill> pill </Badge> {/* pill 테두리 둥글게 적용*/}
                <Badge href="https://maps.google.com" color="warning"> Google Maps </Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;