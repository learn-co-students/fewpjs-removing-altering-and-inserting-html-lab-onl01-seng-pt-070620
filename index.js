// Write your code here!

let element = document.createElement('div');
document.body.appendChild(element)
let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "is the champion";
main.appendChild('newHeader');