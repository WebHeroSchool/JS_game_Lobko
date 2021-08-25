const q1 = {
  question: 'What is the date today?',
  answer: {
    a: 'a) July 2nd',
    b: 'b) July 4th',
    c: 'c) August 15th'
  },
  correctAnswer: 'c'
}

const q2 = {
  question: 'What day is today?',
  answer: {
    a: 'a) Monday',
    b: 'b) Friday',
    c: 'c) Sunday'
  },
  correctAnswer: 'b'
}

const q3 = {
  question: '2 + 2 = ?',
  answer: {
    a: 'a) 7',
    b: 'b) 5',
    c: 'c) 4'
  },
  correctAnswer: 'c
}

const q4 = {
  question: 'When was the last FIFA championship?',
  answer: {
    a: 'a) in 2018',
    b: 'b) in 2017',
    c: 'c) this year'
  },
  correctAnswer: 'a'
}

const arr = [q1, q2, q3, q4];

let i, cor = 0,
    inc = 0;

for (i = 0; i < arr.length; i++) {
  const userAnswer = prompt(arr[i].question + '\n' + Object.values(arr[i].answer));
  if (userAnswer === arr[i].correctAnswer) {
    console.log('Great!You are correct!');
    cor++;
  } else {
    console.log('Woops! Try again next time!');
    inc++;
  }
}

console.log("You have had " + cor + " correct answers and " + inc + " incorrect answers");

// arr.filter(a => a.answer.c === a.answer[a.correctAnswer]).forEach(a => console.log(a.answer[a.correctAnswer]));