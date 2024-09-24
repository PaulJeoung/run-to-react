import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyApp from './MyApp';
import './MyApp.css';
import { useState } from 'react';

import R040_ReactstrapCard from './R040_ReactstrapCard';
import R039_ReactstrapBottons from './R039_ReactstrapBottons';
import R038_ReactstrapButtonGroup from './R038_ReactstrapButtonGroup';
import R037_ReactstrapDropdown from './R037_ReactstrapDropdown';
import R036_ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs';
import R035_ReactstrapBadges from './R035_ReactstrapBadges';
import R034_ReactstrapAlerts from  './R034_ReactstrapAlerts';

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
        <hr></hr>
        <R040_ReactstrapCard />
        <hr></hr>
        <R039_ReactstrapBottons />
        <hr></hr>
        <R038_ReactstrapButtonGroup />
        <hr></hr>
        <R037_ReactstrapDropdown />
        <hr></hr>
        <R036_ReactstrapBreadcrumbs />
        <hr></hr>
        <R035_ReactstrapBadges />
        <hr></hr>
        <R034_ReactstrapAlerts />
        <hr></hr>
      </div>
      <hr></hr>
      <div id='cording'>
        <MyApp />
      </div>

    </div>
  );
}

export default App;