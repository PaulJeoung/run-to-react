import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyApp from './MyApp';
import './MyApp.css';
import { useState } from 'react';

import R034_ReactstrapAlerts from  './R034_ReactstrapAlerts';
import R035_ReactstrapBadges from './R035_ReactstrapBadges';
import R036_ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs';
import R037_ReactstrapDropdown from './R037_ReactstrapDropdown';
import R038_ReactstrapButtonGroup from './R038_ReactstrapButtonGroup';
import R039_ReactstrapBottons from './R039_ReactstrapBottons';
import R040_ReactstrapCard from './R040_ReactstrapCard';
import R041_ReactstrapCarousel from './R041_ReactstrapCarousel';
import R042_ReactstrapCollapse from './R042_ReactstrapCollapse';
import R043_ReacstrapFade from './R043_ReacstrapFade';
import R044_ReactstrapForm from './R044_ReactstrapForm';
import R045_ReactstrapInputGroup from './R045_ReactstrapInputGroup';
import R046_ReactstrapJumbotron from './R046_ReactstrapJumbotron';
import R047_ReactstrapListGroup from './R047_ReactstrapListGroup';
import R048_ReactstrapModal from './R048_ReactstrapModal';
import R049_ReactstrapNavbar from './R049_ReactstrapNavbar';
import R059_FetchGet from './R059_FetchGet';
import R060_FetchPost from './R060_FetchPost';
import R060_FetchPostOthers from './R060_FetchPostOthers';
import R061_AxiosGet from './R061_AxiosGet';
import R062_AxiosPost from './R062_AxiosPost';
import R063_CallbackFunc from './R063_CallbackFunc';
import R064_Promise from './R064_Promise';
import R065_Promise from './R065_Promise';
import R066_onClick from './R066_onClick';
import R067_onChange from './R067_onChange';
import R068_onMouseMove from './R068_onMouseMove';
import R069_onMouseOver from './R069_onMouseOver';
import R070_onMouseOut from './R070_onMouseOut';
import R071_onKey from './R071_onKey';
import R072_onSubmit from './R072_onSubmit';
import R073_ReactRef from './R073_ReactRef';
import R074_ReactCurrying from './R074_ReactCurrying';
import R075_ReactHoc from './Hoc/R075_ReactHoc';
import R076_ContextApi from './Context/R076_ContextApi';
import R77_ContextApi from './Context/R77_ContextApi';

import StrAddButton from './StrAddButton';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      // R081~R083 부분 
      <div>
        <h1>Start React 200!</h1>
        {/* <span>{this.props.store.getState().data.str}</span><br/> */}
        <span>{this.props.str}</span><br/>
        {/* <StrAddButton store={this.props.store}/> */}
        <StrAddButton AppProp="200" />
      </div>
      // R078~R080 부분
      // <div>
      //   <h1>Start React 200!</h1>
      //   <span>{this.props.store.getState().data.str}</span><br/>
      //   <StrAddButton store={this.props.store} />
      // </div>
    );
  }
}
// R081~R083 부분 추가
let mapStateToProps = (state, props) => {
  console.log('Props from index.js : '+props.indexProp)
  return {
    str: state.data.str,
  };
};
App = connect(mapStateToProps, null)(App);
// 기존
export default App;


// function App() {
//   return (
//     <div>
//       <h4>Start React 200!</h4>
//       <R77_ContextApi />
//     </div>
//   );
// }

/* 
  Redux 변경으로 아래 미사용
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
        <R77_ContextApi />
        <hr></hr>
        <R076_ContextApi />
        <hr></hr>
        <R075_ReactHoc name = 'React200' />
        <hr></hr>
        <R074_ReactCurrying />
        <hr></hr>
        <R073_ReactRef />
        <hr></hr>
        <R072_onSubmit />
        <hr></hr>
        <R071_onKey />
        <hr></hr>        
        <R070_onMouseOut />
        <hr></hr>
        <R069_onMouseOver />
        <hr></hr>
        <R068_onMouseMove />
        <hr></hr>
        <R067_onChange />
        <hr></hr>
        <R066_onClick />
        <hr></hr>
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
        <R049_ReactstrapNavbar />
        <hr></hr>
        <R048_ReactstrapModal />
        <hr></hr>
        <R047_ReactstrapListGroup />
        <hr></hr>
        <R046_ReactstrapJumbotron />
        <hr></hr>
        <R045_ReactstrapInputGroup />
        <hr></hr>
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

*/