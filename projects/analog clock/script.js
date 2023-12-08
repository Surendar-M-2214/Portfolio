// // // alert("Hello! I am an alert box!!");
const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};


setClock();
// Update every 1000 ms
setInterval(setClock, 1000);



const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if(switchBtn.textContent.toLowerCase() === "light"){
        switchBtn.textContent = "dark";
        localStorage.setItem("theme", "dark");
        document.getElementById("header").style.color = 'red';
    
       
        document.documentElement.setAttribute("data-theme","dark");
    }
    else{
        switchBtn.textContent = "light";
        document.getElementById("header").style.color = 'yellow';
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme","light");
        document.getElementsByClassName(".sec").style.color = 'yellow';
    }

};
const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";
currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
    switchModeBtn.textContent=currentTheme;
}






