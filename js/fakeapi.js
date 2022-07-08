const course = [
  
  {
    categoria:"js",
    date: "29/06/2022",
    title: "Explicación proyecto final HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/t2QcDbVM8E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "29/06/2022",
    title: "Repaso git y resumen HTML & CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/DcN7MpJpbgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "28/06/2022",
    title: "Navigation Bar HTML",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/hBB0ZyEqJk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "28/06/2022",
    title: "Preprocesador CSS",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/A60uWXv2Q-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  {
    date: "27/06/2022",
    title: "Live-code Session",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/XZ37KcVzm7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    date: "27/06/2022",
    title: "Introducción a git, github & gitflow",
    video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-iIKo9XmnVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },

  // {
  //   date: "24/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/RabW8B1188s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "24/06/2022",
  //   title: "animando un poco nuestro CSS",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/WdiKJyfM-Lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "24/06/2022",
  //   title: "Pseudo elements y classes CSS",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/5y7vky0snqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },

  // {
  //   date: "23/06/2022",
  //   title: "Charla: IF or ELSE?",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/haRjamr1ob8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "23/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/GjO_gHUYdIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "23/06/2022",
  //   title: "Continuación grid",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/_njo-h5C_dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "23/06/2022",
  //   title: "Unidades de medidas en CSS y introducción a grid",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/VvHNZyzFPZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },

  // {
  //   date: "22/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/2NDq2H9INIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "22/06/2022",
  //   title: "creando un sitio con Flexbox",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/_8IHO2glT3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "22/06/2022",
  //   title: "más propiedades CSS ",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/cPvFwyyE11A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },

  // {
  //   date: "21/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/kZajiYQ9sTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "21/06/2022",
  //   title: "Flexbox en detalle",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/LwCKI3IzCjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "21/06/2022",
  //   title: "Repaso propiedades CSS y Flexbox",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/zZYUFRDviTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },

  // {
  //   date: "20/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/0a5ox8CtA2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "20/06/2022",
  //   title: "Introducción al terminal",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/uAx4x5LaUE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "20/06/2022",
  //   title: "Revisión proyecto del viernes y repaso HTML",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/3A91X-LH7qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },

  // {
  //   date: "17/06/2022",
  //   title: "Repaso de la semana + proyecto",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/q183ljA608w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "17/06/2022",
  //   title: "Repaso de lo que vimos en la semana",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/F5_crpSLELc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "16/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/VS2siyiv8iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "16/06/2022",
  //   title: "Atajos en consola",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/DRXVH6jNR9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "16/06/2022",
  //   title: "Repaso HTML y CSS (Formularios, Listas)",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/jVD9Kc_-7G8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "15/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/i-7GR8y6y0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "15/06/2022",
  //   title: "Formularios en HTML con CSS",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/ADgftbraI38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "15/06/2022",
  //   title: "Listas y Formularios en HTML",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/zLlHRO8e7IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "14/06/2022",
  //   title: "¿Y si hablamos de salud mental?",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/vo5wY6d-J2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "14/06/2022",
  //   title: "Live-code Session",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/FsYv7KJ0xjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "14/06/2022",
  //   title: "Creando Filas y Columnas con CSS",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/xSGQl64b5EE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "14/06/2022",
  //   title: "Introducción a CSS",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/tv8ufxZ8P2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "13/06/2022",
  //   title: "Proyecto del día",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/2SMWNX9A92M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "13/06/2022",
  //   title: "Fundamentos del HTML",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/oTLx9fKhwWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
  // {
  //   date: "13/06/2022",
  //   title: "Introducción al Curso",
  //   video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/4qoAvDGtMxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  // },
];

let cardsContainer = document.querySelector(".container__cards");
let info = document.querySelector(".list__video");

for (i = 0; i < course.length; i++) {
  console.log(course[i].title);
  cardsContainer.innerHTML += `<div class="card__item" id="${course[i].date}">
  ${course[i].video}
  <div class="card__text-container">
  <div><h2>${course[i].title}</h2>
  <span>${course[i].date}</span></div>
  </div>
  </div>
  `,info.innerHTML += `<a href="#${course[i].date}" >
  <p>${course[i].title}</p>
  <span>${course[i].date}</span>`;
}
