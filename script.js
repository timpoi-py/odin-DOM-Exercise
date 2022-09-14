const container = document.querySelector('#container');

const parag = document.createElement('p');

parag.setAttribute('style', 'color:red;');
parag.innerText= "Hey I'm red!";
container.appendChild(parag);

const blue_h3 = document.createElement('h3');

blue_h3.setAttribute('style', 'color:blue;');
blue_h3.innerText = "I'm a blue h3!";
container.appendChild(blue_h3);

const div_blackborder = document.createElement('div');
div_blackborder.classList.add('.div_blackborder');
div_blackborder.setAttribute('style', 'background-color:pink; border: 3px solid black');

const another_h1 = document.createElement('h1');
another_h1.innerText = "I'm in a div";

const parag_2 = document.createElement('p');
parag_2.innerText = 'Me too!';

div_blackborder.appendChild(another_h1);
div_blackborder.appendChild(parag_2);
container.appendChild(div_blackborder);