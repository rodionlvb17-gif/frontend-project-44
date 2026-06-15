#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const runBrainCalc = () => {
  const name = greetUser();
  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];
  let correctAnswers = 0;
  const rounds = 3;

  while (correctAnswers < rounds) {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let correctAnswer;
    if (operation === '+') correctAnswer = num1 + num2;
    else if (operation === '-') correctAnswer = num1 - num2;
    else correctAnswer = num1 * num2;

    console.log(`Question: ${num1} ${operation} ${num2}`);
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

runBrainCalc();