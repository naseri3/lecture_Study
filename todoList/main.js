// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탬은 끝난 아이템만, 진행중탭은 진행중 아이템만
// 전체탭을 누리면 다시 전체아이템으로 돌아옴

let taskIinput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = [];

addBtn.addEventListener("click", addTask);

// 배열안에 input에 입력한 값들 저장하는 함수
function addTask() {
    let taskContent = taskIinput.value;         // taskInput안에 value값 입력
    taskList.push(taskContent);                 // value값 추가
    console.log(taskList);
    render();                                   // 항목 추가 함수 호출
}

// 리스트에 그리기
function render() {
    let resultHTML = '';
    // task-boar안에 리스트 추가
    for(let i=0; i<taskList.length; i++) {
        resultHTML += `
            <div class="task">
                <div>${taskList[i]}</div>
                <div>
                    <button>Check</button>
                    <button>Delete</button>
                </div>
            </div>`;
    }
    // task-board안에 리스트 불러오기
    document.getElementById("task-board").innerHTML = resultHTML;
}