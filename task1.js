const names = ['khiem','son','hoang','chien','duy','nam','minh','bach']

function chooseName(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const result = chooseName(names);
console.log(result);
// let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

// let para = document.querySelector('p');

// function chooseName() {
//   let randomNumber = Math.floor(Math.random() * names.length);
//   let choice = names[randomNumber];
//   para.textContent = choice;
// }

// const result = chooseName(names);
// console.log(result);