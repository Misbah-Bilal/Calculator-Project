// const input = document.getElementById("inputField");
// const divContainer = document.getElementById('container')
// input.addEventListener('change', (e) => handleChange(e));

// function handleChange(event) {
//     const inputNumber = event.target.value
//     const message = inputNumber % 2 === 0 ? "even" : "odd"
//     const textnode = document.createElement("p");
//     textnode.textContent = message
//     divContainer.appendChild(textnode)
// }

let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
input.classList.add('white-color')

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})