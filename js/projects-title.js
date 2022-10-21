const all = document.getElementById("all");
const uxui = document.getElementById("uxui");
const media = document.getElementById("media");
const character = document.getElementById("character");
const body = document.getElementById("back");

const titleList = [all, uxui, character, media];

const path = [
  "https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/Back-all.gif",
  "https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/Back-all.gif",
  "https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/Back-character.gif",
  "https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/Back-media.gif"
];

function preloading (imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
      let img = new Image();
      img.src = imageArray[i];
  }
}

preloading(path);

function hover(path_url, tagList){
  body.style.backgroundImage = `url(${path_url})`;
  body.style.backgroundColor = "#000000";

  fadeIn(body, 1, tagList, 0.3);
}

function unhover(tagList){
  body.style.backgroundColor = "#002A21";

  fadeOut(body, 0, tagList, 1);
}

function fadeIn(target, max, tagList, min){
  let level = 0;
  let levels = [1.3, 1.3, 1.3];
  let inIimer = null;
  inIimer = setInterval( function() {
    level = fadeInAction(target, level, inIimer, max);
    tagList.forEach(function callback(element, index) {
      levels[index] = fadeOutAction(element, levels[index], inIimer, min)
    });
  }, 30);
}

function fadeInAction(target, level, inIimer, max) {
  level = level + 0.1;
  changeOpacity(target, level);
  if(level > max) clearInterval(inIimer);
  return level;
}

function fadeOut(target, min, tagList, max) {
  let level = 1;
  let levels = [0, 0, 0, 0];
  let outTimer = null;
  outTimer = setInterval( function() {
    level = fadeOutAction(target, level, outTimer, min);
    tagList.forEach(function callback(element, index) {
      levels[index] = fadeInAction(element, levels[index], outTimer, max)
    });
  }, 10);
}

function fadeOutAction(target, level, outTimer, min) {
  level = level - 0.1;
  changeOpacity(target, level, outTimer);
  if(level < min) clearInterval(outTimer);
  return level;
}

function changeOpacity(target, level){
  target.style.opacity = level;
  target.style.MozOpacity = level;
  target.style.khtmlOpacity = level;
  target.style.filter = "alpha(opacity=" + (level * 100) + ");";
}

titleList.forEach(function callback(element, index) {
  element.onmouseover = function(){
    let tagList = titleList.filter((target) => target !== element)
    hover(path[index], tagList);
    element.style.color = "#EDFF00";
  };
  element.onmouseout = function(){
    unhover(titleList);
    element.style.color = "#FFFFFF";
  };
});