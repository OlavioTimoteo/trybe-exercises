const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'noite');

console.log(lesson2);

//Exercicio 2 - Crie uma função para listar as Keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// Exercício 3: Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));


// Exercício 4: Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

// Exercício 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Exercício 6: Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Exercício 7: Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);

// Exercício 8: Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
