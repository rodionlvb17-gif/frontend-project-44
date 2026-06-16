#!/usr/bin/env node

import runGame from '../src/engine.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [String(num), answer];
};

runGame(rule, getQuestionAndAnswer);