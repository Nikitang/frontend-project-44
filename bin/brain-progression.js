#!/usr/bin/env node
import readlineSync from 'readline-sync';

import consoleName from '../src/cli.js';

const takeRandomNum = (min, max) => {
  const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum1;
};

const spawnProgressionMass = () => {
  let randomStartNumber = takeRandomNum(1, 5);

  const howMuchToAdd = takeRandomNum(1, 6);

  const totalNumbers = takeRandomNum(5, 10);

  const newMass = [];

  for (let i = 0; i < totalNumbers; i += 1) {
    randomStartNumber += howMuchToAdd;
    newMass.push(randomStartNumber);
  }
  return newMass;
};

const randomNumForProgress = takeRandomNum(1, 5);

function brainProgress() {
  console.log('Welcome to the Brain Games!');

  const playerName = consoleName();

  console.log(`Hello, ${playerName}`);

  console.log('What number is missing in the progression?');

  for (let g = 0; g < 3; g += 1) {
    const spawnProgress = spawnProgressionMass();

    const splic = spawnProgress.splice(randomNumForProgress, 1, '..');

    const splicToStr = splic.join('');

    const correctResult = Number(splicToStr);

    const playerAnswer = readlineSync.question(`Question: ${spawnProgress.join(' ')} `);

    console.log(`Your answer: ${playerAnswer}`);

    if (correctResult === Number(playerAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.
      Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

brainProgress();
