import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

class R040_ReactstrapCard extends Component {
    render () {
        return (
            <div>
                <Card>
                    <CardImg top height='200px' src='https://imgnews.pstatic.net/image/109/2024/09/24/0005161612_001_20240924140015894.jpg?type=w647' alt="Card Image" />
                    <CardBody>
                        <CardTitle> Card 제목 </CardTitle>
                        <CardSubtitle> Card 부제목 </CardSubtitle>
                        <CardText>내용 Lorem Ipsum is simply dummy text.</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default R040_ReactstrapCard;