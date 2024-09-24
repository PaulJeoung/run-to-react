import React, {Component} from "react";
import { UncontrolledCarousel } from "reactstrap";

const items =[
    {
        src: 'https://imgnews.pstatic.net/image/079/2024/09/24/0003941114_001_20240924113313754.jpg?type=w647',
        altText: '슬라이드 1 이미지 대체 문구',
        caption: '슬라이드 1 설명',
        header: '슬라이드 1 제목'
    },
    {
        src: 'https://imgnews.pstatic.net/image/079/2024/09/24/0003941114_002_20240924113313799.jpg?type=w647',
        altText: '슬라이드 2 이미지 대체 문구',
        caption: '슬라이드 2 설명',
        header: '슬라이드 1 제목'
    },
    {
        src: 'https://imgnews.pstatic.net/image/293/2024/09/24/0000058713_001_20240924145817375.png?type=w647',
        altText: '슬라이드 3 이미지 대체 문구',
        caption: '슬라이드 3 설명',
        header: '슬라이드 3 제목'
    }
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )}
}

export default R041_ReactstrapCarousel;