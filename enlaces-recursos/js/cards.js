console.log(`exito`)

class cards {
  constructor(image, link, titule, description) {
    this.image = image;
    this.link = link;
    this.titule = titule;
    this.description = description;
  }
}

let card1 = new cards('https://pbs.twimg.com/media/E6_AwftXIAEWrC8.jpg', 'https://larnu.app/', 'LarnU app', 'Enlace directo a app larnU')
let card2 = new cards('https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png', 'https://css-tricks.com/', 'CSS tricks', 'Mejor guia CSS')
let card3 = new cards('https://www.rstudio.com/assets/img/stack-overflow-card.png', 'https://stackoverflow.com/', 'stackoverflow', 'Necesario para sobrevivir')
let card4 = new cards('https://www.xda-developers.com/files/2022/03/moz_blog_header_MDN-Intro-1900x700_c.jpg', 'https://developer.mozilla.org/es/', 'MDN', 'Documentaciones')
let card5 = new cards('https://accurate.id/wp-content/uploads/2021/04/accurate.id-Agile-Adalah-Metode-Project-Management-yang-Fokus-ke-User.jpg', 'https://agilemanifesto.org/', 'Manifiesto Agile', 'Documento generado de los fundadores')
let card6 = new cards('https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png', 'https://www.freecodecamp.org/', 'freecodecamp', 'Seguir estudiando')


let recurses = [card1, card2, card3, card4, card5, card6];


let containerCards = document.getElementsByClassName("resources");
let cardsRecurses = document.getElementsByClassName("resources_card")


for (i = 0; i < recurses.length; i++) {
  containerCards[0].innerHTML += `
    <div class="resources_card">
    <img src="${recurses[i].image}"alt="imagen recurso">
    <a href="${recurses[i].link}">
    <h3 class="resources_titulo">${recurses[i].titule}</h3>
    </a>
    <p class="resources_descripcion">"${recurses[i].description} "</p>
    <div class="resources--center_buttons">
        <p class="counter_positive" id="countPositive1">0</p>
        <button class="resources_button" id="buttonIncrese1">👍</button>
        <p class="counter_negative" id="countNegative1">0</p>
        <button class="resources_button" id="buttonNegative1">👎</button>
      </div>
    </div>`;
}

