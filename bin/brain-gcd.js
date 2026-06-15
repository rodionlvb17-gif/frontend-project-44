#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Функция нахождения НОД (алгоритм Евклида)
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const runBrainGcd = () => {
  const name = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  const rounds = 3;

  while (correctAnswers < rounds) {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

runBrainGcd();
