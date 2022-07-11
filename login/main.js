// Variables
var box = document.createElement("div");
var form = document.createElement("form");
var email = document.createElement("input");
var password = document.createElement("input");
var button = document.createElement("button");
var paragraph = document.createElement("p");
var text = document.createTextNode("Entrar");
var body = document.getElementsByTagName("body");


//Añadiendolos para poder modificar en css

box.classList.add('box');

email.classList.add('email');

password.classList.add('password');

button.classList.add('button');

paragraph.classList.add('paragraph');

// Insertando el div dentro del body 

body[0].appendChild(box);

// placeholder y atributos 

email.placeholder = "Correo";
email.setAttribute("type", "email");
email.setAttribute("required", "");

password.placeholder = "Contraseña";
password.setAttribute("type", "password");
password.setAttribute("required", "");

// Insertando input de email y password al form

form.appendChild(email);
form.appendChild(password);

// Texto del parrafo y dentro del button 

paragraph.appendChild(text);

button.appendChild(paragraph);

// Insertando button dentro del form
form.appendChild(button);

// Insertando el form dentro del box
box.appendChild(form);