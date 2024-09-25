import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

/*
reducer 사용하여 뷰 
최신 버전의 Redux에서는 createStore를 사용할 수 있지만, Redux Toolkit을 권장
*/
const store = createStore(reducers);
// R078~R080 부분
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const listener =() => {
//   root.render(
//     <App store={store} /> 
//   );
// };

// R081~R083 부분
const root = ReactDOM.createRoot(document.getElementById('root')); // 고친 부분
const listener = () => {
  // ReactDOM.render(
  root.render (
    <Provider store={store}>
      <App indexProp = "react" />
    </Provider>,
    // document.getElementById('root')
  );
};

/*
아래 코드 실행 시 발생하는 react_dom_client__WEBPACK_IMPORTED_MODULE_1__.render is not a function 오류는 
React 18 이상에서 react-dom/client 모듈을 사용해야 하기 때문에 발생함
ReactDOM.render 대신 ReactDOM.createRoot를 사용해야 함

const listener = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};
*/
store.subscribe(listener);
listener();

/*
original code 사용하여 뷰 만들기
*/
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
