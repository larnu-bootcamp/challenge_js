const course = [
  {
    date: "29/06/2022",
    categoria: "js",
    title: "Explicación proyecto final HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/t2QcDbVM8E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "29/06/2022",
    categoria: "html",
    title: "Repaso git y resumen HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/DcN7MpJpbgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "28/06/2022",
    categoria: "css",
    title: "Navigation Bar HTML",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/hBB0ZyEqJk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "28/06/2022",
    categoria: "css",
    title: "Preprocesador CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/A60uWXv2Q-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "27/06/2022",
    categoria: "html",
    title: "Live-code Session",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/XZ37KcVzm7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "27/06/2022",
    categoria: "js",
    title: "Introducción a git, github & gitflow",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-iIKo9XmnVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

let cardsContainer = document.querySelector(".container__cards");
let selectItem = document.querySelector(".select__item");

selectItem.addEventListener("change", (e) => {
  let selected = e.target.value;
  console.log(selected);
  cardsContainer.innerHTML = "";
  for (i = 0; i < course.length; i++) {
    console.log(course[i].categoria);

    if (selected == course[i].categoria) {
      // let card = document.createElement(banana,[div]);
      // cardsContainer.appendChild(card);
      cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
    ${course[i].video}
    <div class="card__text-container">
    <div><h2>${course[i].title}</h2>
    <span>${course[i].date}</span></div>
    </div>
    </div>
    `;
    }
    if (selected == "all") {
      cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
    ${course[i].video}
    <div class="card__text-container">
    <div><h2>${course[i].title}</h2>
    <span>${course[i].date}</span></div>
    </div>
    </div>
    `;
    }
  }
});

for (i = 0; i < course.length; i++) {
  // console.log(course[i].categoria);
  // let card = document.createElement(banana,[div]);
  // cardsContainer.appendChild(card);
  cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
  ${course[i].video}
  <div class="card__text-container">
  <div><h2>${course[i].title}</h2>
  <span>${course[i].date}</span></div>
  </div>
  </div>
  `;
}
