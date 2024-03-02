// ** Métodos de Modificación **

// 1. concat: Combina dos o más arrays.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("1. concat:", combined);

// 2. pop: Elimina el último elemento del array y lo retorna.
const numbersPop = [1, 2, 3];
const removed = numbersPop.pop();
console.log("2. pop:", removed, numbersPop);

// 3. push: Añade uno o más elementos al final del array.
const numbersPush = [1, 2];
numbersPush.push(3, 4);
console.log("3. push:", numbersPush);

// 4. splice: Cambia el contenido del array eliminando o reemplazando elementos.
const numbersSplice = [1, 2, 3, 4, 5];
numbersSplice.splice(2, 1);
console.log("4. splice:", numbersSplice);

// 5. unshift: Añade uno o más elementos al inicio del array.
const numbersUnshift = [2, 3];
numbersUnshift.unshift(1);
console.log("5. unshift:", numbersUnshift);

// 6. fill: Rellena todos los elementos del array con un valor específico.
const numbersFill = [1, 2, 3];
numbersFill.fill(0);
console.log("6. fill:", numbersFill);

// 7. of: Crea un nuevo array con los elementos proporcionados.
const newArrayOf = Array.of(1, 2, 3);
console.log("7. of:", newArrayOf);

// ** Métodos de Acceso y Búsqueda **

// 9. every: Verifica si todos los elementos cumplen con una condición.
const numbersEvery = [1, 2, 3];
const allPositive = numbersEvery.every(num => num > 0);
console.log("9. every:", allPositive);

// 10. find: Retorna el primer elemento que cumple con una condición.
const numbersFind = [1, 2, 3, 4];
const found = numbersFind.find(num => num > 2);
console.log("10. find:", found);

// 11. indexOf: Retorna el índice del primer elemento igual al proporcionado.
const numbersIndexOf = [1, 2, 3, 1];
const index = numbersIndexOf.indexOf(1);
console.log("11. indexOf:", index);

// 12. slice: Retorna un subarray a partir de los índices dados.
const numbersSlice = [1, 2, 3, 4, 5];
const subArray = numbersSlice.slice(1, 4);
console.log("12. slice:", subArray);

// 13. some: Verifica si al menos un elemento cumple con una condición.
const numbersSome = [1, 2, 3];
const hasEven = numbersSome.some(num => num % 2 === 0);
console.log("13. some:", hasEven);

// 14. sort: Ordena los elementos del array.
const fruitsSort = ['banana', 'apple', 'orange'];
const sortedFruits = fruitsSort.sort();
console.log("14. sort:", sortedFruits);

// 15. values: Retorna un nuevo objeto iterador de valores para el array.
const numbersValues = [1, 2, 3];
const iteratorValues = numbersValues.values();
for (const value of iteratorValues) {
  console.log("15. values:", value);
}

// 16. entries: Retorna un nuevo objeto iterador de pares clave/valor para el array.
const numbersEntries = [1, 2, 3];
const iteratorEntries = numbersEntries.entries();
for (const [index, value] of iteratorEntries) {
  console.log("16. entries:", index, value);
}

// 17. from: Crea un nuevo array a partir de un objeto iterable o array-like.
const iterableFrom = '123';
const newArrayFrom = Array.from(iterableFrom, num => parseInt(num));
console.log("17. from:", newArrayFrom);

// 18. flatMap: Crea un nuevo array aplicando una función y aplanando el resultado.
const wordsArray = ['hello', 'world'];
const charsArray = wordsArray.flatMap(word => word.split(''));
console.log("18. flatMap:", charsArray);

// ** Métodos de Iteración y Comprobación **

// 19. forEach: Ejecuta una función para cada elemento del array.
const numbersForEach = [1, 2, 3];
numbersForEach.forEach(num => console.log("19. forEach:", num));

// 20. map: Crea un nuevo array aplicando una función a cada elemento.
const numbersMap = [1, 2, 3];
const squared = numbersMap.map(num => num * num);
console.log("20. map:", squared);

// 21. reduce: Reduce el array a un solo valor aplicando una función acumuladora.
const numbersReduce = [1, 2, 3];
const sum = numbersReduce.reduce((acc, num) => acc + num, 0);
console.log("21. reduce:", sum);

// 22. reverse: Invierte el orden de los elementos en el array.
const numbersReverse = [1, 2, 3];
const reversed = numbersReverse.reverse();
console.log("22. reverse:", reversed);

// 23. shift: Elimina el primer elemento del array y lo retorna.
const numbersShift = [1, 2, 3];
const shifted = numbersShift.shift();
console.log("23. shift:", shifted, numbersShift);

// 24. toString: Convierte el array a una cadena de texto.
const numbersToString = [1, 2, 3];
const str = numbersToString.toString();
console.log("24. toString:", str);

// 25. isArray: Verifica si un objeto es un array.
const arrCheck = [1, 2, 3];
const isArr = Array.isArray(arrCheck);
console.log("25. isArray:", isArr);

// 26. includes: Verifica si un array incluye un elemento específico.
const numbersIncludes = [1, 2, 3];
const includesTwo = numbersIncludes.includes(2);
console.log("26. includes:", includesTwo);

// 27. keys: Retorna un nuevo objeto iterador de claves para el array.
const numbersKeys = [1, 2, 3];
const iteratorKeys = numbersKeys.keys();
for (const key of iteratorKeys) {
  console.log("27. keys:", key);
}

// 28. flat: Aplana un array de subarrays.
const nestedArrayFlat = [1, [2, 3], [4, [5]]];
const flatArray = nestedArrayFlat.flat();
console.log("28. flat:", flatArray);

// 29. lastIndexOf (agregado para llegar a 30): Retorna el último índice del elemento igual al proporcionado.
const numbersLastIndexOf = [1, 2, 3, 1, 2];
const lastIndex = numbersLastIndexOf.lastIndexOf(2);
console.log("29. lastIndexOf:", lastIndex);
