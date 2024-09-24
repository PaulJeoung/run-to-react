import React,{Children, Component} from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";

/*
reactstrap의 최신 버전에서 코드의 일관성과 단순성을 위해 InputGroupAddon 기능 미지원
InputGroupText와 InputGroup을 사용하여 기능을 구현 해야 함
아래 처럼 직관적으로 사용 가능
*/


class R045_ReactstrapInputGroup extends Component {
    render() {
        return(
            <>
            <InputGroup>
                <Input placeholder="userid" /><InputGroupText>@reactmail.com</InputGroupText>
                {/* <InputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroupAddon> */}
            </InputGroup>
            <InputGroup>
                {/* <InputGroupAddon addonType="prepend">
                    <Button>버튼</Button>
                </InputGroupAddon> */}
                <Button>버튼</Button><Input placeholder="왼쪽 버튼"/>
            </InputGroup>
            </>
        );
    }
}
export default R045_ReactstrapInputGroup;