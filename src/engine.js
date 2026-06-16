import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (rule, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(rule);

  let correctAnswers = 0;
  const rounds = 3;

  while (correctAnswers < rounds) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;