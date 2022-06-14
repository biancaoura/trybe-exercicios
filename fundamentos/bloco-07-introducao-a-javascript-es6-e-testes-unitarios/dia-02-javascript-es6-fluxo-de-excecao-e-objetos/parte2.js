// EXERCÍCIOS PARTE 2

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const dPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phone = order.phoneNumber;
  const { street } = order.address;
  const { number } = order.address;
  const { apartment } = order.address;
  console.log(`Olá ${dPerson}, entrega para: ${customer}, Telefone: ${phone}, ${street}, Nº:${number}, AP: ${apartment}`);
};
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const info = order.order;
  const customer = order.name = 'Luiz Silva';
  const flavors = Object.keys(info.pizza);
  const coke = info.drinks.coke.type;
  const price = order.payment.total = 50;
  console.log(`Olá ${customer}, o total do seu pedido de ${flavors[0]} e ${flavors[1]} e ${coke} é de R$${price},00`);
};
orderModifier(order);

// EXERCÍCIOS PARTE 3

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

// ADD TURNO DA NOITE EM lesson2
const addKey = (obj, key, value) => {
  obj[key] = value;
};
addKey(lesson2, 'turno', 'noite');
console.log(lesson2);

// LISTAR KEYS DE OBJETO
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson2));

// MOSTRAR TAMANHO DE UM OBJ
const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson2));

// LISTAR VALORES DE OBJ
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));

// CRIAR OBJ COM TODAS AS AULAS
const allLessons = { lesson1, lesson2, lesson3 };
console.log(allLessons);

// NÚMERO TOTAL DE ESTUDANTES
const howMany = (obj) => {
  let students = 0;
  const lessons = Object.keys(obj);
  for (let i = 0; i < lessons.length; i += 1) {
    students += (obj[lessons[i]].numeroEstudantes);
  }
  return students;
};
console.log(howMany(allLessons));

// OBTER VALOR DA CHAVE DE ACORDO COM POSIÇÃO NO OBJ
const valuePosit = (obj, index) => Object.values(obj)[index];
console.log(valuePosit(lesson1, 0));

// VERIFICAR SE KEY/VALUE EXISTE
const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i].includes(key) && entries[i].includes(value)) {
      return true;
    }
  }
  return false;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));

// BÔNUS 1 - CONTAR ESTUDANTES QUE ASSISTIRAM AULA DE MAT
function countStudents(obj, subject) {
  const lessons = Object.keys(obj);
  let students = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    if (obj[lessons[i]].materia === subject) {
      students += obj[lessons[i]].numeroEstudantes;
    }
  }
  return students;
}
console.log(countStudents(allLessons, 'Matemática'));

// BÔNUS 2 - REPORT DE AULAS E ESTUDANTES DO PROF
const createReport = (obj, teacher) => {
  const values = Object.values(obj);
  const newArray = [];
  let students = 0;
  for (let i = 0; i < values.length; i += 1) {
    const indexValues = Object.values(values[i]);
    if (indexValues.includes(teacher)) {
      newArray.push(values[i].materia);
      students += values[i].numeroEstudantes;
    }
  }
  return { professor: teacher, aulas: newArray, estudantes: students };
};
console.log(createReport(allLessons, 'Maria Clara'));
