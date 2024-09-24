import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyApp from './MyApp';
import './MyApp.css';
import { useState } from 'react';

import R057_Sweetalert2Position from './R057_Sweetalert2Position';
import R058_Sweetalert2Confirm from  './R058_Sweetalert2Confirm'

function App() {
  return (
    <div>
      <div id='basic'>
        <h4>Start React 200!</h4>
        <h5><a href='https://github.com/writingdeveloper/React.js-200-examples/tree/main/client/src'>sourceCode 바로가기</a></h5>
        <h5><a href='https://learning-and-running.tistory.com/112'>초보자를 위한 리액트 200제(React)</a></h5>
        <p id='p1'> Curiculum is not enough, should read a book NOW!! </p>
      </div>
      <div id='exercise'>

        <R058_Sweetalert2Confirm />

        <R057_Sweetalert2Position />

      </div>
      <hr></hr>
      <div id='cording'>
        <MyApp />
      </div>

    </div>
  );
}

export default App;