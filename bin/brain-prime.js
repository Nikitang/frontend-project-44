#!/usr/bin/env node
import readlineSync from 'readline-sync';

import consoleName from '../src/cli.js';

function primeNumber(number) {
  
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
}

function brainPrime() {

  console.log('Welcome to the Brain Games!');

  const playerName = consoleName();

  console.log(`Hello, ${playerName}`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let g = 0; g < 3; g += 1) {

    const randomNum1 = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    console.log(`Question: ${randomNum1}`);

    const answer = (readlineSync.question('Your answer: '));

    const primeOrNot = primeNumber(randomNum1);

    if (primeOrNot === true) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. 
        Let's try again, ${playerName}!`);
        return;
      }
    } else if (primeOrNot !== true) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${playerName}!`);
        return
      }
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

brainPrime();
