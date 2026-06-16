#!/usr/bin/env node

import runGame from '../src/engine.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let correctAnswer;
  if (operation === '+') correctAnswer = num1 + num2;
  else if (operation === '-') correctAnswer = num1 - num2;
  else correctAnswer = num1 * num2;

  const question = `${num1} ${operation} ${num2}`;
  return [question, String(correctAnswer)];
};

runGame(rule, getQuestionAndAnswer);