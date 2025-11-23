const API_KEY = `92d0543ed6554ab5b6414bee64820d87`          // api key 변수
let newsList = [];                      // 계속 사용하기 위해 전역변수로 사용
const menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));

// 뉴스 API 가져오기
let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
// new 인스턴스는 필요한 함수와 변수들을 제공해준다.
// 인스턴스란? : 해당 api안에 있는 객체를 보여준다.
// console.log("API 공부", url);

let totalResults = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;


// 코드 리펙토링
const getNews = async () => {
    try {
        url.searchParams.set("page", page);         // page = page라는 뜻
        url.searchParams.set("pageSize", pageSize);

        const response = await fetch(url);
        // fetch : url 데이터 가져오기
       
        const data = await response.json();
        // await는 함수 안에 async를 넣어야 사용할 수 있다.
        if(response.status === 200) {
            if(data.articles.length === 0) {
                throw new Error("No result for this search");
            }
            newsList = data.articles;           // 지역변수로 재할당
            totalResults = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        }
        
    } catch(error) {
        // console.log("error", error.message);
        errorRender(error.message);
    }
    
}


const getLatestNews = async () => {
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    getNews();
    // console.log("dddd", newsList);     // articles 데이터 보여지기
};


// 1. 버튼에 클릭 이벤트 주기
const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    // toLowerCase() 로 소문자 변환
    // console.log("category", category);
    // 2. 카테고리별 뉴스 가져오기
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    getNews();
};

// 검색 기능
const getNewsByKeyword = async () => {
    const keyword = document.getElementById("search-input").value;      // 검색어 들고오기
    // console.log("keyword", keyword);
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`);
    getNews();
}

const render = () => {
    const newsHTML = newsList.map(
        (news) => `
            <div class="row news">
                <div class="col-lg-4">
                    <img class="news-img-size" src=${news.urlToImage}>
                </div>
                <div class="col-lg-8">
                    <h2>${news.title}</h2>
                    <p>${news.description}</p>
                    <div>
                        ${news.source.name} | ${news.publishedAt}
                    </div>
                </div>
            </div>
        `).join('');
        console.log(newsHTML);

    document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (errorMessage) => {
    const errorHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessage}
    </div>`;
    document.getElementById("news-board").innerHTML = errorHTML;
}

const paginationRender = () => {
    // totalResult
    // page
    // pageSize
    // groupSize
    // totalPages
    const totalPages = Math.ceil(totalResults / pageSize);
    // pageGroup
    const pageGroup = Math.ceil(page / groupSize);
    // lastPage
    let lastPage = pageGroup * groupSize;
    // 마지막 페이지그룹이 그룹사이즈보다 작다? lastpage = totalpage
    if(lastPage > totalPages) {
        lastPage = totalPages
    }

    // firstPage
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
    
    // first ~ last
    // Previous 추가
    let paginationHTML = `<li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link" href="#">Previous</a></li>`;

    for(let i=firstPage; i<=lastPage; i++) {
        paginationHTML += ` <li class="page-item ${i === page ? "active" : ""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`
    }
    // Next 추가
    paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link" href="#">Next</a></li>`

    document.querySelector(".pagination").innerHTML = paginationHTML;
}

const moveToPage = (pageNum) => {
    console.log("moveToPage", pageNum);
    page = pageNum;
    getNews();
}

getLatestNews();

// 작업을 실행을 시켜주는 것 = 쓰레드
// 큐 : 처음 데이터가 처음으로 나간다
// pending : 기다려줘
// async : 전체 함수를 일시정지 시켜주는 메서드
// await : 데이터를 기다려 달라는 메서드