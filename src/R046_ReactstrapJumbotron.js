import React, {Component} from "react";
import { Jumbotron, Button, Card, CardBody, CardTitle, CardText} from 'reactstrap'

/*
reactstrap의 최신 버전에서는 Jumbotron 컴포넌트가 공식적으로 미지원
*/

class R046_ReactstrapJumbotron extends Component {
    render() {
        return(
            <div>
                <Card style={{backgroundColor: "grey"}}>
                    <CardBody style={{textAlign: "left"}}>
                        <CardTitle className="display-4">React 200</CardTitle>
                        <CardText className="h4">
                            Contray to popular belif,
                            Lorem Ipsum is not simply random text.
                        </CardText>
                        <hr className="my-2"/>
                        <CardText className="lead">
                            There area many variations of passges of
                            Lorem Ipsum available
                        </CardText>
                        <Button color="danger">Go Detail</Button>
                    </CardBody>

                </Card>
                {/* <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                    <h1 className="display-4">React 200</h1>
                    <p className="h4">
                    Contray to popular belif,
                    Lorem Ipsum is not simply random text.
                    </p>
                    <hr className="my-2"/>
                    <p>
                    There area many variations of passges of
                    Lorem Ipsum available
                    </p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron> */}
            </div>
        )
    }
}

export default R046_ReactstrapJumbotron;