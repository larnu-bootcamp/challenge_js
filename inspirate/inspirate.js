// data es un arreglo del archivo data.js el cual es incorporado en el codigo html previo a este

// Tarjetas para Links Externos
// permite crear html
class LinkTarjeta {
    constructor(link, img, titulo, texto) {
        this.link = link;
        this.img = img;
        this.titulo = titulo;
        this.texto = texto;
    }

    generarHtml(){
        // Genera codigo HTML dentro de un div con clase tarjeta y un id llamado como this.titulo
        return `<a href="${this.link}">
        <div class="carta">
        <img class="imagen_carta" src="img/${this.img}">
        <div class="texto_carta">
            <h3>${this.titulo}</h3>
            <p>${this.texto}</p>
        </div>
        </div>
        </a>`;
    }

}

var tarjeta = new LinkTarjeta("logo.png","logo.png","titulo","lorem ipsum dolor sit amet, consectetur adipiscing elit")

// Loop para crear varias tarjetas a partir de Data
let div_padre = document.getElementById("div_padre");
for (i=1; i <= 8; i++) {
    var child = document.createElement("div")    
    child.innerHTML = tarjeta.generarHtml()

    div_padre.appendChild(child);
}