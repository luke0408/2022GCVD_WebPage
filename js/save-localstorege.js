const projectCard = document.querySelectorAll(".project-grid > .project-card");

projectCard.forEach((el, index) => {
  el.onclick = () => {
    x = el.classList[1];
    console.log(x);
    window.localStorage.setItem('index', x)
  }
});