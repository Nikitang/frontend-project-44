#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainCalc() {
  const name2 = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name2}`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];

    const randomSign = Math.floor(Math.random() * arr.length);

    const randomNum1 = Math.floor(Math.random() * (1 + 50)) + 1;

    const randomNum2 = Math.floor(Math.random() * (1 + 50)) + 1;

    let correctResult = 0;

    if (arr[randomSign] === arr[0]) {
      correctResult = randomNum1 + randomNum2;
    } else if (arr[randomSign] === arr[1]) {
      correctResult = randomNum1 - randomNum2;
    } else if (arr[randomSign] === arr[2]) {
      correctResult = randomNum1 * randomNum2;
    } else {
      correctResult = randomNum1 / randomNum2;
    }

    const calcQuest = `${randomNum1} ${arr[randomSign]} ${randomNum2}`;

    const answer = readlineSync.question(`Question: ${calcQuest} `);

    console.log(`Your answer: ${answer}`);

    if (Number(answer) === correctResult) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctResult}.
        Let's try again, ${name2}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name2}!`);
}

brainCalc();
