import React,{Component} from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class R047_ReactstrapListGroup extends Component {
    render() {
        return(
            <>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        Badge <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">Disabled</ListGroupItem>
                    <ListGroupItem tag="a" href="https://maps.google.com">Google Maps</ListGroupItem>
                    <ListGroupItem tag="button" action onClick={
                        e => alert("button")}>Button</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}

export default R047_ReactstrapListGroup;