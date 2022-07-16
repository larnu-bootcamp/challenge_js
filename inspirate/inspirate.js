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
        return `<div class="carta">
        <div class="imagen_carta">

        </
        <div class="texto_carta">
            <h3>${this.titulo}</h3>
            <p>${this.texto}</p>
        </div>
        </div>`;
    }

}

var tarjeta = new LinkTarjeta("a","b","c","d")
var tarjeta2 = new LinkTarjeta("a","b","titulo","lorem ipsum dolor sit amet, consectetur adipiscing elit")


// Agregar al div contenedor_tarjetas
/*
let div_padre = document.getElementById("div_padre");
let child_p_elem = document.createElement("p")
let child_p_elem2 = document.createElement("p")
let child_p_elem3 = document.createElement("p")
let child_p_elem4 = document.createElement("p")

//div_padre.appendChild(tarjeta.generarHtml());
//let tarjeta = document.createElement("div")
child_p_elem.innerHTML = tarjeta.generarHtml()
child_p_elem2.innerHTML = tarjeta.generarHtml()
child_p_elem3.innerHTML = tarjeta.generarHtml()
child_p_elem4.innerHTML = tarjeta.generarHtml()
div_padre.appendChild(child_p_elem);
div_padre.appendChild(child_p_elem2);
div_padre.appendChild(child_p_elem3);
*/

// Loop para crear varias tarjetas a partir de Data
let div_padre = document.getElementById("div_padre");

for (i=1; i <= 5; i++) {
    //var newP = document.createElement("p");
    //var pText = document.createTextNode("sample paragraph");
    //newP.appendChild(pText);
    var child = document.createElement("div")    
    child.innerHTML = tarjeta.generarHtml()

    div_padre.appendChild(child);
    //var contentSection = document.getElementById("content");
    //document.body.insertBefore(newP, contentSection);
}