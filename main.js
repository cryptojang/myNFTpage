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
