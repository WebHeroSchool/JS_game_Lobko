const q1 = {
  question: '9 + 10 - 5 = ?',
  answer: {
    a: 'a) 15 ',
    b: 'b) 11 ',
    c: 'c) 14 '
  },
  correctAnswer: 'c'
}

const q2 = {
  question: '(3 + 7) / 5 + 6 = ?',
  answer: {
    a: 'a) 11 ',
    b: 'b) 8 ',
    c: 'c) 5 '
  },
  correctAnswer: 'b'
}

const q3 = {
  question: '2 + 2 = ?',
  answer: {
    a: 'a) 7 ',
    b: 'b) 5 ',
    c: 'c) 4 '
  },
  correctAnswer: 'c'
}

const q4 = {
  question: '8 - 4 / 2 + 6 = ?',
  answer: {
    a: 'a) 12 ',
    b: 'b) 10 ',
    c: 'c) 15 '
  },
  correctAnswer: 'a'
}

const arr = [q1, q2, q3, q4];

let i, correctAnswer = 0;

let userAnswer = [];

//alert the start of the game
alert('Посчитаем вместе!');

//display questions and ask for answers
for (i = 0; i < arr.length; i++) {
  let a = prompt(arr[i].question + '\n' + Object.values(arr[i].answer));
  userAnswer.push(a);
}

//function for sorting 
function checkAnswer(a) {
  for (i = 0; i < a.length; i++) {
    if (a[i] === arr[i].correctAnswer) {
      correctAnswer++;
    }
  }
}

//call the checkAnswer function
checkAnswer(userAnswer);

//print to HTML the amount of correct answers
let p = document.getElementById('answer');
p.innerHTML = ('Классно поиграли! У тебя ' + correctAnswer + ' правильных ответa.');