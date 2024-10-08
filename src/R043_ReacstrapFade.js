import React,{Component} from "react";
import { Button, Fade } from "reactstrap";

class R043_ReacstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = {fadeInOut : true}
    }
    toggle = (e) => {
        this.setState({fadeInOut: !this.state.fadeInOut})
    }
    render() {
        return(
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Fade>
            </div>
        )
    }
}
export default R043_ReacstrapFade;