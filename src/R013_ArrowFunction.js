import React, {Component} from "react";

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        };
    }

        componentDidMount() {
            Function1(1);
            this.Function2(1,1);
            this.Function3(1,3);
            this.Function4();
            this.Function5(0,2,3);

            function Function1(num1) {
                return console.log(num1+' . ES5 Function');
            }
        }

        Function2 = (num1, num2) => {
            let num3 = num1 + num2;
            console.log (num3+' . Arrow Function : '+this.state.arrowFuc);
        }

        Function3() { // 주석 처리된 부분을 넣고 실행 하면, exception 발생 this가 바인딩 되지 않아서 생긴 에러
            var this_bind = this;
            setTimeout(function() {
                console.log(this_bind.state.num+' . ES5 Callback Function noBind : ');
                console.log(this.state.arrowFuc);
            }.bind(this), 100); // }, 100);
        }

        Function4() {
            setTimeout(function() {
                console.log('4. ES5 Callback Function Bind : '+this.state.arrowFuc);
            }.bind(this),100);
        }

        Function5 = (num1, num2, num3) => {
            const num4 = num1 + num2 + num3;
            setTimeout(() => {
                console.log(num4+' . Arrow Callback Function : '+this.state.arrowFuc);
            }, 100);
        }

        render() {
            return(
                <h2>[THIS IS ArrowFunction]</h2>
            )
        }
    }
export default R013_ArrowFunction;