const path = [
  'https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/main_title.gif',
  'https://media.githubusercontent.com/media/luke0408/2022GCVD_WebPage/main/images/gifs/main_logo.gif'
]

function preloading (imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
      let img = new Image();
      img.src = imageArray[i];
  }
}

preloading(path);