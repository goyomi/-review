const container = document.querySelector('#root');

const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json'
// 변수를 대문자로 지정한 이유: 주소url이 바뀔일은 없음, 그러나 매우 중요함. 다른사람들이 보면 안됨. 이런 변수를 환경변수라고 하는데 환경변수는 대문자로 쓰게함. 이게 공개되지 않도록 하는 방법은 따로있음 

// 현재 사용자가 보고 있는 페이지의 정보와 화면에 보여질 아이템 갯수를 저장하는 객체
const store = {
  currentPage: 1,
  datasPerPage: 20
}

// api 데이터 받아오는 함수
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('네트워크에 문제가 있습니다.');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}


async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL);
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);
  console.log(newsFeed);
  const newsList = [];

  newsList.push('<ul>');

  for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
    newsList.push(`
          <li>
              <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
          </li>
      `);
  }

  newsList.push('</ul>');

  let pageList = '';
  for (let i = 0; i < totalPages; i++) {
    pageList += `<li><a href="#/page/${i + 1}">${i + 1}</a></li>`
  }

  newsList.push(
    `<nav>
          <ul>
              ${pageList}
          </ul>
      </nav>`
  )

  container.innerHTML = newsList.join('');
}



// 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
  const id = location.hash.substring(9);
  const newsContent = await getData(CONTENT_URL.replace('$id', id));

  container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div>
  `;
}


// 라우터 : 화면을 중계하는 함수.
function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.includes('#/page/')) {
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();