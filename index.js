
// remove main

let main = document.getElementById('main');
main.remove();
// document.removeChild(document.querySelector('main'))

// create h1 with id victory
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('ID', 'victory')

// using innerHTML
let element = document.querySelector('h1#victory')
element.innerHTML = 'ebo is the champion'