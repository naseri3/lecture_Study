// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다.
    // 1. check 버튼을 클릭하는 순간 true false
    // 2. true이면 끝난걸로 간주하고 밑줄 보여지기
    // 3. false이면 안 끝난걸로 가주하고 그대로
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탬은 끝난 아이템만, 진행중탭은 진행중 아이템만
// 전체탭을 누리면 다시 전체아이템으로 돌아옴

let taskIinput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = [];

addBtn.addEventListener("click", addTask);

// 배열안에 input에 입력한 값들 저장하는 함수
function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent:  taskIinput.value,         // taskInput안에 value값 입력
        isComplete: false,           // 끝났나? 안 끝났나?
    }
    taskList.push(task);                 // value값 추가
    console.log(taskList);
    render();                                   // 항목 추가 함수 호출
}

// 리스트에 그리기
function render() {
    let resultHTML = '';
    // task-boar안에 리스트 추가
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].isComplete ==  true) {
            resultHTML += `
            <div class="task">
                <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                    <button class="btn btn-primary" onClick="toggleComplete('${taskList[i].id}')">Check</button>
                    <button class="btn btn-danger" onClick="deleteTask('${taskList[i].id}')">Delete</button>
                </div>
            </div>`
        } else {
            resultHTML += `
                <div class="task">
                    <div>${taskList[i].taskContent}</div>
                    <div>
                        <button class="btn btn-primary" onClick="toggleComplete('${taskList[i].id}')">Check</button>
                        <button class="btn btn-danger" onClick="deleteTask('${taskList[i].id}')">Delete</button>
                    </div>
                </div>`;
        }
    }
    // ${taskList[i].taskContent} : taskList안에 저장된 객체들 중 taskContent만 출력

    // task-board안에 리스트 불러오기
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
    // 함수한테 어떤 걸 선택했는지 알려줘야 한다.
    // 해당 함수에 taskList id값 호출
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;           // 반대편에 있는 value 선택
            break;
        }
    }
    render();
    console.log(taskList);
}
// 인터넷에 " generate random id javascript " 검색해서
// github에 다른 사람들이 만든 랜덤 아이디 코드 가져오기

function randomIDGenerate() {
    return Math.random().toString(36).substring(2, 16);
}

// 삭제 함수
function deleteTask(id) {
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
    // 반드시 ui도 업데이트 해야한다!!
}