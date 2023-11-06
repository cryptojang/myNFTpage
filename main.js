const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();

  //let hours = String(date.getHours()).padStart(2, "0");

  let hours = date.getHours();

  let amPm = "AM";

  if (hours >= 12) amPm = "PM";

  if (hours >= 13) {
    hours %= 12;

    // hours = hours % 12; 와 같같음음
  }

  //let hours2 = date.getHours() >= 13 ? date.getHours() : date.getHours() % 12; 삼항연산자로도 표현 가능

  hours = String(hours).padStart(2, "0");

  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
setInterval(getQuotes, 1000);

const QUOTE_LIST = "quotesList";
//오타 나면 안 되는 키값은 상수로 만들고, 대문자로 쓰고 상수 넣어서 틀리지 않도록 함. 상수는 다 대문자로 작성!

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem(QUOTE_LIST);

  if (!savedQuotes) {
    // 없으면 기본적으로 하나 생성
    localStorage.setItem(QUOTE_LIST, JSON.stringify(["하와이 가면"]));

    savedQuotes = localStorage.getItem(QUOTE_LIST);
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerHTML =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes"); /// 이거 왜 추가했어야 하는지 고민해보기, 뜬 입력창 지울때!!!
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  //local storage save. print on page
  let savedQuotes = localStorage.getItem(QUOTE_LIST);
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  //다시 로컬에 저장
  localStorage.setItem(QUOTE_LIST, JSON.stringify(parsedQuotes));

  //현재 펭지 반영
  quotes.innerText = newQuotesInput.value;

  //버튼 누른 후 박스에 남아있지 않도록
  newQuotesInput.value = "";

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}

async function getNft() {
  const nftImg = document.querySelector(".nft-img");
  const nftName = document.querySelector(".nft-name");
  const nftDesc = document.querySelector(".nft-desc");

  //ㅇㅕ기서 지갑 훑고 지갑 주소 불러옴 지금은 바로 아는 주소 가져옴
}
async function getNft() {
  const nftImg = document.querySelector(".nft-img");
  const nftName = document.querySelector(".nft-name");
  const nftDesc = document.querySelector(".nft-desc");

  const response = await axios.get(
    "https://olbm.mypinata.cloud/ipfs/QmSTkwUrg2neZ9J8Ws3UADbM3bySUcQbvwRFPKFo7vmB9E"
  );

  nftImg.src = response.data.image;
  nftName.innerText = response.data.name;
  nftDesc.innerText = response.data.description;
}

getNft();
