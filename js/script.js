const q1 = {
  question: 'What is the date today?',
  answer: {
    a: 'July 2nd',
    b: 'July 4th',
    c: 'August 15th'
  },
  correctAnswer: 'c'
}

const q2 = {
  question: 'What day is today?',
  answer: {
    a: 'Monday',
    b: 'Friday',
    c: 'Sunday'
  },
  correctAnswer: 'b'
}

const q3 = {
  question: '2 + 2 = ?',
  answer: {
    a: '7',
    b: '5',
    c: '4'
  },
  correctAnswer: 'c'
}

const q4 = {
  question: 'When was the last FIFA championship?',
  answer: {
    a: 'in 2018',
    b: 'in 2017',
    c: 'this year'
  },
  correctAnswer: 'a'
}

const arr = [q1, q2, q3, q4];

arr.filter(a => a.answer.c === a.answer[a.correctAnswer]).forEach(a => console.log(a.answer[a.correctAnswer]));