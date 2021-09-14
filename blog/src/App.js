/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '가천 우동 맛집','마포 김밥 맛집', '여자 코트 추천']);
  let [좋아요, 좋아요숫자변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>테스트 blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 좋아요숫자변경( 좋아요 + 1)} }>👍</span> {좋아요}
        <button onClick={ 제목바꾸기 }> 제목 변경 </button> </h3>
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
