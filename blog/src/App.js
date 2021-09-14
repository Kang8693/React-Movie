/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '인천 우동 맛집','인천 김밥 맛집']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>테스트 blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p> 2월 23일 발행 </p>
        <hr/>
      </div>  
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> 2월 23일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p> 2월 23일 발행 </p>
        <hr/>  
      </div>
    </div>
  );
}

export default App;
