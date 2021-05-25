const names = ['khiem','son','hoang','chien','duy','nam','minh','bach']

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseName(array) {
  let choice = array[random(0, array.length)];
  return choice;
}

const result = chooseName(names);
console.log(result);