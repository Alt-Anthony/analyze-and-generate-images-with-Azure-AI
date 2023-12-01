
// Título
const title = document.createElement('h1');
title.textContent = 'Mi Aplicación';
document.body.appendChild(title);

// Cuadro de texto para la dirección URL
const urlInput = document.createElement('input');
urlInput.type = 'text';
urlInput.placeholder = 'Ingrese una dirección URL';
document.body.appendChild(urlInput);

// Botón 1
const button1 = document.createElement('button');
button1.textContent = 'Botón 1';
document.body.appendChild(button1);

// Botón 2
const button2 = document.createElement('button');
button2.textContent = 'Botón 2';
document.body.appendChild(button2);
