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


// Method 1
const btn2 = document.querySelector('.btn2');
btn2.onclick = () => alert("Hello! I'm Button 2");

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    alert("Im button 3")
});

// Method 2

function helloBtn() {
    alert("Hello! I am a button!");
}

const btn2_2 = document.querySelector('.btn2_2');
btn2_2.onclick = helloBtn;

const btn3_3 = document.querySelector('.btn3_3');



btn3_3.addEventListener('click', function (e) {
    e.target.style.background = 'red';
});