const btnTheme = document.getElementById('btn-theme');
const imgSunMoon = document.getElementById('imgSunMoon');
const body = document.getElementById("body-theme");

const paragraphs = document.getElementsByTagName('p');
const titleH1 = document.getElementsByTagName('h1');
const btns = document.getElementsByTagName('button');
const links = document.getElementsByTagName('a');

btnTheme.addEventListener("click", () => {
  body.classList.toggle('light-mode');
  verificationClass();
})

function verificationClass() {
  if (body.classList.contains('light-mode')) {
    colorTxtThemeLight();
    imgMoon();
  } else {
    colorTxtThemeDark();
    imgSun();
  }
}

function colorTxtThemeLight() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#000';
  }

  for (let i = 0; i < titleH1.length; i++) {
    titleH1[i].style.color = '#000';
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.color = '#000';
  }
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = '#000';
  }
}

function colorTxtThemeDark() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#f5f5f5';
  }

  for (let i = 0; i < titleH1.length; i++) {
    titleH1[i].style.color = '#f5f5f5';
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.color = '#f5f5f5';
  }
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = '#f5f5f5';
  }
}

function imgMoon() {
  imgSunMoon.src='./assets/moon.svg';
}

function imgSun() {
  imgSunMoon.src='./assets/sun.svg';
}