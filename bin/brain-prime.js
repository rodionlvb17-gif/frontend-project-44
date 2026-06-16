#!/usr/bin/env node

import runGame from '../src/engine.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

runGame(rule, getQuestionAndAnswer);