#!/usr/bin/env node

import runGame from '../src/engine.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

runGame(rule, getQuestionAndAnswer);
