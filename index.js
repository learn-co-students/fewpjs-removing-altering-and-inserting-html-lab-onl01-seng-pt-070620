let element = document.querySelector('main#main')
element.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHtml = "Kameron is the champion";
newHeader.className = "victory";