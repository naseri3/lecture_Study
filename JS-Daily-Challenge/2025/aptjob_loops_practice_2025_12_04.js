// ===============================
// 📁 aptjob_loops_practice.js
// (회사 코드인 척 하기 좋은 문제 세트)
// ===============================


// --------------------------------
// 문제 1 (for) — 특정 조건의 공고만 모으기 ⭐⭐
// --------------------------------
// 📌 requirements
// - 아래 jobs 배열에서
//   1) 지역(region)이 "서울"
//   2) 경력(career)이 "신입"
//   인 공고의 제목(title)만 뽑아서 newJobs 배열에 담으세요.
// - 마지막에 console.log(newJobs)로 결과를 출력하세요.

const jobs = [
    { id: 1, title: "아파트 경비원", region: "서울",  career: "신입" },
    { id: 2, title: "시설 관리 직원", region: "경기",  career: "경력" },
    { id: 3, title: "주차 관리 요원", region: "서울",  career: "경력" },
    { id: 4, title: "미화원",       region: "서울",  career: "신입" },
    { id: 5, title: "경비반장",     region: "부산",  career: "신입" },
  ];
  
  let newJobs = [];
  
  // 🔻 여기부터 for문 직접 작성
  for (let i = 0; i < jobs.length; i++) {
    // TODO: 조건에 맞는 공고의 title만 newJobs에 push
    if(jobs[i].region === "서울" && jobs[i].career === "신입") {
        newJobs.push(jobs[i].title);
    }
  }
  
  console.log("문제 1 결과:", newJobs);
  // 예상: ["...", "..."] 이런 식으로 나와야 함(직접 적어보기)
  
  console.log("--------------------------------");
  
  
  
  // --------------------------------
  // 문제 2 (for...of) — 회사 요약 문구 만들기 ⭐⭐
  // --------------------------------
  // 📌 requirements
  // - companies 배열의 각 객체를 순회하면서
  //   `"APTJOB 파트너: {name} / 지역: {region} / 공고 수: {jobCount}"`
  //   이런 형식의 문자열을 만들고, summaries 배열에 넣으세요.
  // - 반드시 for...of 문을 사용하세요.
  
  const companies = [
    { name: "백운에프엠", region: "서울", jobCount: 12 },
    { name: "푸른종합주택관리",  region: "경기", jobCount: 5 },
    { name: "대원에스테이트서비스", region: "인천", jobCount: 8 },
  ];
  
  let summaries = [];
  
  // 🔻 for...of 사용
  for (const company of companies) {
    // TODO: 위 조건대로 문자열을 만들어 summaries에 push
    summaries.push(`"APTJOB 파트너: ${company.name} / 지역: ${company.region} / 공고 수: ${company.jobCount}"`)
  }
  
  console.log("문제 2 결과:", summaries);
  // 예: ["APTJOB 파트너: ...", "..."] 형식으로 나와야 함
  
  console.log("--------------------------------");
  
  
  
  // --------------------------------
  // 문제 3 (for...in) — 검색 필터를 쿼리스트링으로 변환하기 ⭐⭐⭐
  // --------------------------------
  // 📌 requirements
  // - searchFilter 객체를 for...in으로 순회해서
  //   값이 비어있지 않은(key: value가 ""가 아닌) 항목만
  //   `"key=value"` 형태의 문자열로 만들어 queryParts 배열에 담으세요.
  // - 마지막에 queryString은 `"key=value&key2=value2"` 형식이 되어야 함.
  //   (순서는 상관없음)
  
  const searchFilter = {
    region: "서울",
    jobType: "",
    keyword: "경비",
    sort: "recent",
  };
  
  let queryParts = [];
  
  // 🔻 for...in 사용
  for (const key in searchFilter) {
    // TODO:
    // 1) 값이 빈 문자열("")이면 건너뛰기
    // 2) 아니면 "key=value" 형식으로 만들어 queryParts에 push
    if(searchFilter[key] !== "") {
        queryParts.push(`${key} = ${searchFilter[key]}`);
    }
    // for...in → 객체의 key를 순회
    // searchFilter[key] → 해당 key에 대한 value 접근
  }
  
  const queryString = queryParts.join("&");
  
  console.log("문제 3 결과:", queryString);
  // 예상 예시: region=서울&keyword=경비&sort=recent
  
  console.log("--------------------------------");
  
  
  
  // --------------------------------
  // 문제 4 (forEach) — 지원자 상태별 카운트 만들기 ⭐⭐⭐
  // --------------------------------
  // 📌 requirements
  // - applicants 배열에는 지원자 정보가 있습니다.
  // - forEach를 사용해서 statusCount 객체에 상태별 인원 수를 카운트하세요.
  //   예) { 접수: 2, 검토중: 1, 불합격: 1 } 이런 식
  // - statusCount 객체를 콘솔에 출력하세요.
  
  const applicants = [
    { name: "홍길동",   status: "접수" },
    { name: "김영희",   status: "검토중" },
    { name: "이철수",   status: "접수" },
    { name: "박미나",   status: "불합격" },
    { name: "정우성",   status: "접수" },
  ];
  
  const statusCount = {};
  
  // 🔻 forEach 사용
  applicants.forEach((applicant) => {
    // TODO:
    // 1) applicant.status를 사용해서 statusCount에 키로 접근
    // 2) 해당 상태가 처음 나오면 1로 세팅, 이미 있으면 +1
    const status = applicant.status;

    if(!statusCount[status]) {
        statusCount[status] = 1;
    } else {
        statusCount[status] += 1;
    }
    // statusCount[status] 는 새로운 key를 동적으로 만드는 방식이야.
  });
  
  console.log("문제 4 결과:", statusCount);
  // 예: { 접수: 3, 검토중: 1, 불합격: 1 }
  
  console.log("--------------------------------");
  
  
  
  // --------------------------------
  // 문제 5 (선택형) — 어떤 반복문을 쓰는 게 좋을까? ⭐⭐⭐⭐
  // --------------------------------
  // 📌 requirements
  // 아래 tasks 설명을 보고, 각 작업에
  //   - for
  //   - for...of
  //   - for...in
  //   - forEach
  // 중 어떤 반복문이 더 적절할지 직접 골라서 구현해보세요.
  //
  // (정답은 여러 개가 될 수도 있음. "왜 이걸 썼는지"도 주석으로 적어두면 공부에 좋아!)
  
  
  const dashboard = {
    todayVisit: 1203,
    totalVisit: 50231,
    newResume: 12,
    newJobs: 5,
  };
  
  const notices = [
    "[공지] 아파트잡 개인정보 처리방침 개정 안내",
    "[점검] 12/10(수) 새벽 2시 서비스 점검",
    "[안내] 기업회원 유료서비스 오픈",
  ];
  
  const resumeList = [
    { name: "홍길동", age: 45,   region: "서울" },
    { name: "김영희", age: 52,   region: "경기" },
    { name: "이철수", age: 61,   region: "인천" },
  ];
  
  
  // (A) dashboard 객체의 key와 value를 모두 출력하는 함수 만들기
  // 예)
  // todayVisit : 1203
  // totalVisit : 50231
  function printDashboard(obj) {
    // TODO: 적절한 반복문 선택해서 구현
    for(const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
  }
  printDashboard(dashboard);
  
  
  // (B) notices 배열을 순회하면서
  // "[공지] ..." 앞에 번호를 붙여 출력
  // 1. [공지] ...
  // 2. [점검] ...
  function printNotices(list) {
    // TODO: 적절한 반복문 선택해서 구현
    list.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    })
  }
  printNotices(notices);
  
  
  // (C) resumeList에서 50세 이상만 골라서
  // "이름(지역)" 형태의 문자열 배열로 만들어 반환하는 함수 만들기
  // 예: ["김영희(경기)", "이철수(인천)"]
  function getOverFifty(list) {
    // TODO: 적절한 반복문 선택해서 구현
    let result = [];
    for (const user of list) {
        if(user.age >= 50) {
            result.push(`${user.name}(${user.region})`);
        }
    }
    return result;
  }
  
  const overFifty = getOverFifty(resumeList);
  console.log("문제 5 결과:", overFifty);
  
  