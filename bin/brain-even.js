#!/usr/bin/env node
import readlineSync from 'readline-sync';

import consoleName from '../src/cli.js';

function brain() {
  console.log('Welcome to the Brain Games!');

  const playerName = consoleName();

  console.log(`Hello, ${playerName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * (1 + 100)) + 1;

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${playerName}!`;
      }
    } else if (randomNum % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${playerName}!`;
      }
    }
  }
  return `Congratulations, ${playerName}!`;
}

console.log(brain());
