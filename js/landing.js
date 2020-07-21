let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

let form = document.getElementById("form-box");

login = () => {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
};
register = () => {
  x.style.left = "-450px";
  y.style.left = "50px";
  z.style.left = "110px";
};
// forgot = () => {
//     form.style.display = "none";
// }

let random = document.getElementById("punch");
let randomizer = document.getElementById("punch-btn");
let rand = document.getElementById("img1");
let randImg = document.getElementById("img2");
let images = [
  "images/pexels.jpeg",
  "images/nero_devil_may_cry_5_4k-1920x1080.jpg",
  "images/darksiders_war_horse_fire_city_21821_1920x1200_2.jpg",
  "images/3d_bars-1366x768.jpg",
  "images/yosemiti_valley_4k_8k-3840x2161.jpg",
  "images/titanfall_game_heroes_robot_92981_1920x1080.jpg",
  "images/Sunrise.jpg",
  "images/portfolio11.jpg",
  "images/mazda3_tcr_2019_4k_8k_2-1920x1080.jpg",
];

random.addEventListener("click", () => {
  let randNum = Math.floor(Math.random() * images.length);

  rand.src = images[randNum];
});

randomizer.addEventListener("click", () => {
  let randNum = Math.floor(Math.random() * images.length);

  randImg.src = images[randNum];
});

/* Math.ceil(Math.random()*10)

let changePic = () => {
    let button = document.getElementsByTagName('img');
    let i = 0;
    for (; i < images.length; i++) {
        return i
    }
    const element = images[i];

    button.src = element;
};

changePic();*/
