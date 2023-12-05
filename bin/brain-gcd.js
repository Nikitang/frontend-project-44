#!/usr/bin/env node
import readlineSync from 'readline-sync';

import consoleName from '../src/cli.js';

function takeNod(a, b) {
  if (!b) {
    return a;
  }

  return takeNod(b, a % b);
}

function gameNOD() {
  console.log('Welcome to the Brain Games!');

  const playerName = consoleName();

  console.log(`Hello, ${playerName}`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

    const randomNum2 = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

    const gcdQuestion = `${randomNum1} ${randomNum2}`;

    console.log(`Question: ${gcdQuestion} `);

    const answer = readlineSync.question('Your answer: ');

    const loadGCD = takeNod(randomNum1, randomNum2);

    if (Number(answer) === loadGCD) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${loadGCD}'.
      Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

gameNOD();
