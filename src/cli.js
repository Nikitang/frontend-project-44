import readlineSync from 'readline-sync';

function consoleName() {
  const name1 = readlineSync.question('May I have your name?: ');
  return name1;
}

export default consoleName;
