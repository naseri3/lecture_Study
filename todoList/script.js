/*************************************************
 * Todo List (main.js)
 * - 입력 → 추가(+)
 * - Check → 완료 토글(취소선)
 * - Delete → 항목 삭제
 * - 탭(All / not Done / Done) 클릭 시 필터 + 언더라인 이동
 *************************************************/

// ========== 기본 엘리먼트 참조 ==========
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const underLine = document.getElementById("under-line");

// '#under-line'을 탭 목록에서 제외하고 탭만 선택
const tabs = document.querySelectorAll(".task-tabs div:not(#under-line)");

// ========== 상태값 ==========
let taskList = [];     // 전체 할일 목록
let filterList = [];   // 필터링된 목록 (ongoing/done일 때 사용)
let mode = "all";      // 현재 탭 상태: all | ongoing | done

// ========== 이벤트 바인딩 ==========

// 1) '+' 버튼으로 항목 추가
addBtn.addEventListener("click", addTask);

// 2) Enter 키로도 항목 추가
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// 3) 탭 클릭 시: 필터 + 언더라인 이동
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    filter(event); // 탭에 맞게 목록 필터링
    moveUnderLine(event.target); // 언더라인 위치/너비 갱신
  });
});

// 4) 초기 로드 시: 'All' 탭 위치로 언더라인 맞추기 + 초기 렌더
window.addEventListener("DOMContentLoaded", () => {
  const allTab = document.getElementById("all");
  moveUnderLine(allTab);
  render(); // 초기엔 빈 리스트지만 구조를 잡아줌
});

// 5) 창 크기 변경 시에도 현재 탭 기준으로 언더라인 보정
window.addEventListener("resize", () => {
  const currentTab = document.getElementById(mode);
  if (currentTab) moveUnderLine(currentTab);
});

// ========== 함수 ==========

/**
 * 언더라인을 특정 탭 요소 하단으로 이동
 */
function moveUnderLine(target) {
  // CSS에서 bottom: 0 으로 고정했으므로 left/width만 조정
  underLine.style.left = target.offsetLeft + "px";
  underLine.style.width = target.offsetWidth + "px";
  // transition은 CSS에 설정(권장)
}

/**
 * 랜덤 ID 생성
 * - 버튼 핸들러에서 특정 항목을 식별할 때 사용
 */
function randomIDGenerate() {
  return Math.random().toString(36).substring(2, 16);
}

/**
 * 입력값으로 할일 추가
 */
function addTask() {
  const content = taskInput.value.trim();
  if (!content) {
    // 공백만 입력한 경우는 무시 (필요시 alert로 안내 가능)
    return;
  }

  const task = {
    id: randomIDGenerate(),
    taskContent: content,
    isComplete: false,
  };

  taskList.push(task);
  taskInput.value = ""; // 입력창 비우기

  // 현재 탭 모드(필터 상태)를 유지한 채로 다시 렌더
  filter(); // event 없이 호출하면 mode는 그대로, 렌더만 갱신
}

/**
 * 현재 모드(mode)에 맞는 리스트를 화면에 그리기
 */
function render() {
  // 1) 현재 모드에 따라 사용할 리스트 결정
  let list = [];
  if (mode === "all") {
    list = taskList;
  } else {
    // ongoing/done 은 filter()에서 만든 filterList 사용
    list = filterList;
  }

  // 2) 화면에 뿌릴 HTML 생성
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const doneClass = item.isComplete ? "task-done" : "";
    resultHTML += `
      <div class="task">
        <div class="${doneClass}">${item.taskContent}</div>
        <div>
          <button class="btn btn-primary" onClick="toggleComplete('${item.id}')">Check</button>
          <button class="btn btn-danger" onClick="deleteTask('${item.id}')">Delete</button>
        </div>
      </div>
    `;
  }

  // 3) DOM 반영
  document.getElementById("task-board").innerHTML = resultHTML;
}

/**
 * 완료 여부 토글(체크)
 * - item.isComplete 값을 true/false 반전
 * - UI 갱신은 filter()로 통일
 */
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter(); // 현재 모드 유지 + 렌더 갱신
}

/**
 * 항목 삭제
 * - 해당 id의 항목을 배열에서 제거
 * - UI 갱신은 filter()로 통일
 */
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
  }
  filter(); // 현재 모드 유지 + 렌더 갱신
}

/**
 * 탭 별 필터링
 * - event가 있으면(mode를 클릭한 탭으로 변경) 언더라인 이동
 * - event가 없으면(mode 유지) 목록만 갱신
 */
function filter(event) {
  // 탭 클릭으로 들어온 경우: mode 변경 + 언더라인 이동
  if (event && event.target && event.target.id) {
    mode = event.target.id; // all | ongoing | done
    moveUnderLine(event.target);
  }

  // 필터 목록 초기화
  filterList = [];

  if (mode === "all") {
    // 전체 보기: 그냥 렌더
    render();
    return;
  }

  // ongoing / done 분기
  for (let i = 0; i < taskList.length; i++) {
    const item = taskList[i];
    if (mode === "ongoing" && item.isComplete === false) {
      filterList.push(item);
    } else if (mode === "done" && item.isComplete === true) {
      filterList.push(item);
    }
  }

  render();
}

// 전역에서 쓰는 핸들러를 window에 노출 (inline onClick용)
window.toggleComplete = toggleComplete;
window.deleteTask = deleteTask;
