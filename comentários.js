//VAR É GLOBAL E, TAMBÉM LOCAL
//HOISTING

console.log('> Existe x antes do bloco?', x, 'sim, mas ele não é definido')
{
  var x = 10
}
console.log('agora ele existe e, é definido', x)

//interpolação é :
console.log(`interpolção é: ${2 + 2}`)

// object
console.log({
  name: 'Felipe',
  idade: 14,
  andar: function () {
    console.log('andar')
  }
})

// array
console.log([
  'leite',
  'ovos',
  'farinha',
  'fermento',
  'milho',
  'leite de coco',
  2,
  4
])

const listcake = [
  'Trigo',
  'sal',
  'açúcar',
  {
    Composition: 'água e sal',
    water: 'água',
    salter: 'sal'
  }
]

console.log(listcake.length)

let student = {
  name: 'Felipe',
  age: 14,
  weight: 14.9,
  isSecureContext: false
}

let Student = {
  name: 'Cida',
  age: 36,
  weight: 90,
  isSecureContext: true
}

//declaration
let students = []

students = [student, Student]

let Nasciment = {
  name: 'Leoci',
  age: 40,
  weight: 75,
  isSecureContext: true
}

students[2] = Nasciment

console.log(students)

//declaration
function createPhases() {
  console.log('Você é o melhor')
  console.log('Nunca desista')
  console.log('Quando estiver cansado não desista, aprenda a descançar')
}
//execute, run,  call,  invoke
createPhases()

//function expression( anonymous)
//parameters
const contarGeneros = function (homens, mulheres) {
  let total = homens + mulheres
  return total
}

let Robertos = 34
let Marias = 16

console.log(` the total Robertos is ${Robertos}`)
console.log(`the total Marias is ${Marias}`)
console.log(`a soma dos dois é ${contarGeneros(Robertos, Marias)}`)

function fazerSuco(fruta1, fruta2) {
  return 'suco de ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)
/* function fazerSuco(fruta1, fruta2) {
  console.log('suco de ' + fruta1 + fruta2)
}
fazerSuco('banana', 'maça')
*/
function Person(nome) {
  this.Pessoa = nome
  this.walk = function () {
    return this.Pessoa + ' está emagrecendo'
  }
}
const Felipe = new Person('Felipe')
const João = new Person('João')

console.log(Felipe.walk())
console.log(João.walk())

// Transformando String em número e número em string

let string = '1994'
let number1 = 8

console.log(Number(string) + number1)
console.log(string + String(number1))

// Contar os caracteres e os dígitos
console.log(string.length)
console.log(String(number1).length)

// Transformando um número quebrado em um número com apenas 2 casa decimais
// Além de trocar o ponto pela vírgula e reticencias.

let number = 291.77777777
console.log(number.toFixed(3).replace('.', ',') + '...')

// Transformando letras maiúsculas em letras minúsculas
// e o inverso

let word = 'Eu sou o melhor'
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Vereificando se há , a palavra "Felipe"

let phase = 'Eu quero ser milionário'
console.log(phase.includes('Felipe'))

// Separando um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranfornme o array em um textp e onde eram espaços, coloque _

let text = 'Eu vou ser o melhor'
let erray = text.split(' ')
let textWithUnderscore = erray.join('_')
console.log(textWithUnderscore)

//criando um Array com um cronstrutor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

console.log(
  [
    's',
    6,
    { type: 'array' },
    ['tesla model x', 'tesla model y'],
    function () {
      return 'E, fim'
    }
  ][4]()
)

//contar os elementos de uma array
console.log(['x', 'y', 'z'].length)

// transformando um acadeia de caractéres (uma string) em elementos de uma array

let words = 'Paralelepipedo'
console.log(Array.from(words))

let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('nodejs')

//adicionar no começo
techs.unshift('sql')

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somento alguns elementos da aray
//console.log(techs.slice(1, 3))

//remover um ou mais itens em qualquer  posição  do array
//techs.splice(1, 1)

//encontrar a posição de um elemento  no array
let whereIndex = techs.indexOf('css')
//remover
techs.splice(whereIndex, 1)

console.log(techs)

let deletar = {
  name: 'Laís',
  age: '14',
  height: 1.7
}
delete deletar.age
console.log(deletar)
// multiplicação
console.log(2 * 11)
//divisão
console.log(440 / 20)
//soma
console.log(11 + 11)
//subtração
console.log(33 - 11)

//resto da divisão( quando eu divido 11/10 o resto é um )
let remainder
remainder = 13 % 10
console.log(remainder)

//incremento
let number2 = 21
console.log(++number2)
//decremento
let number3 = 23
console.log(--number3)
//exponencial(potencia[3³])
console.log(22 ** 1)

//grouping  operator
let total22 = (5 + 6) * 2
console.log(total22)

//comparação  de valores
let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == '1')

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

// === estritamente igual a
console.log(one === '1') // false ( pois o valor é uma string mas no original ele é um number )
console.log(one === 1) //true

// !== estritamente diferende de
console.log(two !== '2') //true ( pois o valor é uma string mas no original ele é um number )
console.log(two !== 2) //false ( pois eles são iguais)

// > maior que
console.log(one > two)

// >= maior igual a

console.log(one >= 1)
console.log(two >= 1)

//< menor que
console.log(one < two)

//<= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de  atribuição  (Assignment)
let y

// assignment
y = 1

// addition assignment
// x = x + 2
y += 2

// subtraction assingment
// x = x - 1
y -= 1

// multiplication assignment
// x = x * 2
y *= 2

//division assignment
// x = x / 2
y /= 2

//reimander (resto da divisão)
y %= 1

//exponetiation (potencia)

y **= 0

console.log(y)

//operadores lógicos

let pao = true
let queijo = false

// AND &&
console.log(pao && queijo)

// OR ││
console.log(pao || queijo)

// NOT !
console.log(!queijo)

//operador consdicional ternário

let age = 18

function welcome() {
  alert('Bem vindo')
}
function recuse() {
  alert('apenas para maiores de 18')
}

const permiçao = age >= 18 ? welcome() : recuse()

// IF......ELSE

let weight = 65

if (weight >= 80) {
  console.log('pesado')
} else {
  console.log('leve')
}

// switch

let expression = 'yes'

switch (expression) {
  case 'sim':
    console.log('yes')
    break
  case 'não':
    console.log('no')
    break
  default:
    console.log('Nenhum destes')
    break
}

//throw
function sayMayName(nome = '') {
  if (nome === '') {
    throw new Error('Name is required')
  }
}

// try....catch

try {
  sayMayName()
} catch (c) {
  console.log(c)
}

