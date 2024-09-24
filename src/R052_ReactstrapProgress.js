import React, {Component} from "react";
import { Progress } from "reactstrap";

class R052_ReactstrapProgress extends Component {
    constructor (props) {
        super(props);
        this.state = { Progress:0 }
    }

    componentDidMount () { this.Progress() }

    Progress = () => {
        if(this.state.Progress !==100) {
            setTimeout(function() {
                this.setState({Progress: this.state.Progress+1});
                this.Progress();
            }.bind(this), 100);
        }
    }
    render() {
        return (
            <>
                <Progress color="info" value={this.state.progress}>
                    {this.state.progress}%</Progress> <br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">Wow!</Progress>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                </Progress>
            </>
        )
    }
}
export default R052_ReactstrapProgress;