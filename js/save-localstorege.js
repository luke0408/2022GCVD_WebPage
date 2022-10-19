const projectCard = document.querySelectorAll(".project-grid > .project-card");

projectCard.forEach((el, index) => {
  el.onclick = () => {
    console.log(index);
    window.localStorage.setItem('index', index)
  }
});