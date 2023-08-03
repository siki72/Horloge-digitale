const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const ampm = document.querySelector(".am-pm");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const date = new Intl.DateTimeFormat("fr-FR", { dateStyle: "full" }).format(
  new Date()
);

let [jour, numero, mois] = date.split(" ");

function time() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let isAmOrPm = "AM";
  if (h > 12) {
    h = "0" + (h - 12);
    isAmOrPm = "PM";
  }

  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = isAmOrPm;
  day.innerText = jour;
  month.innerText = `${numero} / ${mois}`;
}

setInterval(() => {
  time();
}, 1000);

time();
