import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyApp from './MyApp';
import './MyApp.css';
import { useState } from 'react';

import R065_Promise from './R065_Promise';
import R064_Promise from './R064_Promise';
import R063_CallbackFunc from './R063_CallbackFunc';
import R062_AxiosPost from './R062_AxiosPost';
import R061_AxiosGet from './R061_AxiosGet';
import R060_FetchPostOthers from './R060_FetchPostOthers';
import R060_FetchPost from './R060_FetchPost';
import R059_FetchGet from './R059_FetchGet';

import R047_ReactstrapListGroup from './R047_ReactstrapListGroup';
import R046_ReactstrapJumbotron from './R046_ReactstrapJumbotron';
import R045_ReactstrapInputGroup from './R045_ReactstrapInputGroup';
import R044_ReactstrapForm from './R044_ReactstrapForm';
import R043_ReacstrapFade from './R043_ReacstrapFade';
import R042_ReactstrapCollapse from './R042_ReactstrapCollapse';
import R041_ReactstrapCarousel from './R041_ReactstrapCarousel';
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
        {/* <hr></hr>
        <R065_Promise />
        <hr></hr>
        <R064_Promise />
        <hr></hr>
        <R063_CallbackFunc />
        <hr></hr>
        <R062_AxiosPost />
        <hr></hr>
        <R061_AxiosGet />
        <hr></hr>
        <R060_FetchPostOthers />
        <hr></hr>
        <R060_FetchPost />
        <hr></hr>
        <R059_FetchGet />


        <hr></hr>
        <R047_ReactstrapListGroup />
        <hr></hr>
        <R046_ReactstrapJumbotron />
        <hr></hr>
        <R045_ReactstrapInputGroup />
        {/* <hr></hr>
        <R044_ReactstrapForm />
        <hr></hr>
        <R043_ReacstrapFade />
        <hr></hr>
        <R042_ReactstrapCollapse />
        <hr></hr>
        <R041_ReactstrapCarousel />
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
        <hr></hr> */}
      </div>
      <hr></hr>
      <div id='cording'>
        <MyApp />
      </div>

    </div>
  );
}

export default App;