import React from 'react'

function Box(props) {
  // 컴퓨터 결과 값
  const getResult = () => {
    if(!props.result) return "";

    // user 기준
    if(props.title === "You") {
      return props.result;
    }
    // computer 기준
    if(props.result === "WIN") return "LOSE";
    if(props.result === "LOSE") return "WIN";
    return "TIE";
  }

  // 결과에 따른 클래스명
  const getResultClass = () => {
    const result = getResult();
    if(result === "WIN") return "win";
    if(result === "LOSE") return "lose";
    if(result === "TIE") return "tie";
  }

  return (
    <div className={`box ${getResultClass()}`}>
        <h1>{props.title}</h1>
        <img src={props.item && props.item.img} className='item-img' width="200"/>
        {/* 
          props.item 가드값을 넣어줘야 한다. 
          props.item 값이 아직 없거나(undefined) 인 상태일 수 있음
          props.item이 아직 없을 수 있는 상황에서 에러를 막기 위한 안전장치다.
        */}
        <h2>{getResult()}</h2>
    </div>
  )
}

export default Box