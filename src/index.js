/*
const numeros = [-5, -12, -2, -40, -33, -1, 8]

const encontrarMayor = (arrNum) => {
  let mayor = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arrNum.length; i++) {
    //comparar si el numero actual es > que el siguiente
    if (arrNum[i] > mayor) {
      // si es true, guardar en una variable (mayor)
      mayor = arrNum[i]
    }
  }
  return mayor
}

console.log(encontrarMayor(numeros));
*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function menorDieciocho(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

console.log(menorDieciocho(edades));
