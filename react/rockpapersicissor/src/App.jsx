import './App.css'
import { useState } from 'react';
import Box from './component/Box'


// 로직
// 1. 박스 2개 (타이틀, 사진정보, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3~4의 결과를 가지고 누가 이겼는지 승패를 가진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886",
  },
  scissors:{
    name:"Scissors",
    img:"https://m.etlandmall.co.kr/nas/cdn/attach/product/2025/03/18/B0365712/B0365712_0_600.jpg",
  },
  paper:{
    name:"Paper",
    img:"https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const [computerSelect, setComputerSelect] = useState(null);

  const [result, setResilt] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResilt(judgement(choice[userChoice], computerChoice));
    // jubgement(유저 선택값, 컴퓨터 선택값)
  };

  const judgement = (user, computer) => {
    // user == computer     : tie
    // user == "rock", computer == "scissors"   user 이김
    // user == "rock", computer == "paper"      user 짐
    // user == "scissors", computer == "paper"  user 이김
    // user == "scissors", computer == "rock"   user 짐
    // user == "paper", computer == "rock"      user 이김
    // user == "paper", computer == "scissors"  user 짐

    // if(user.name == computer.name) {
    //   return "tie"
    // } else if(user.name == "Rock") {
    //   if(computer == "Scissors") {
    //     return "WIN"
    //   } else {
    //     return "LOSE"
    //   }
    // }

    if(user.name == computer.name) {
      return "TIE"
    } else if (user.name == "Rock") return computer.name == "Scissors" ? "WIN" : "LOSE"
    else if(user.name == "Scissors") return computer.name == "Paper" ? "WIN" : "LOSE"
    else if(user.name == "Paper") return computer.name == "Rock" ? "WIN" : "LOSE"
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // 객체에 키값만 뽑아서 배열로 만들어주는 함수
    console.log("item Array :", itemArray);
    let randimItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randimItem];
    return choice[final];
  };

  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect}  result={result} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        {/*함수를 콜백함수 형태로 넣어야 한다.  */}
      </div>
    </>
  )
}

export default App


// Props : 부모 컴포넌트에서 자식으로 데이터나 함수를 전달할 때는 props를 사용해요. 
// props는 컴포넌트 속성처럼 전달되며, 자식 컴포넌트 내에서 `props.속성이름` 형태로 접근할 수 있답니다.

// React에서 이벤트 핸들러에 함수 () => myFunction(인자)
// : React 렌더링 시 함수가 즉시 실행되는 것을 막기 위해 사용

//  React에서 초기값이 `null`이거나 `undefined`일 수 있는 데이터를 렌더링할 때
// `&&` 논리 연산자 등을 사용한 조건부 렌더링을 활용한다

