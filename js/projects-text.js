const about = document.getElementsByClassName("about")[0];
const designers = document.getElementsByClassName("designers")[0];

const afterTextList = ["전시 소개", "졸업생"];
const beforTextList = ["About Us", "Designers"];
const tagList = [about, designers];

function textFadeIn(target, max){
  let level = 0;
  let inIimer = null;
  inIimer = setInterval( function() {
    level = fadeInAction(target, level, inIimer, max);
  }, 50);
}

function fadeInAction(target, level, inIimer, max) {
  level = level + 0.1;
  changeOpacity(target, level);
  if(level > max) clearInterval(inIimer);
  return level;
}

function textFadeOut(target, min) {
  let level = 1;
  let outTimer = null;
  outTimer = setInterval( function() {
    level = fadeOutAction(target, level, outTimer, min);
  }, 50);
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

function changeTag(target, text){
  textFadeOut(target, 0);
  target.innerText = text;
  textFadeIn(target, 1);
}

tagList.forEach(function callback(element, index) {
  element.onmouseover = function(){
    changeTag(element, afterTextList[index]);
  };
  element.onmouseout = function(){
    changeTag(element, beforTextList[index]);
  };
});