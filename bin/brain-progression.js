#!/usr/bin/env node

import runGame from '../src/engine.js';

const rule = 'What number is missing in the progression?';

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

const getQuestionAndAnswer = () => {
  const [question, correctAnswer] = generateProgression();
  return [question, correctAnswer];
};

runGame(rule, getQuestionAndAnswer);