#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Функция для генерации арифметической прогрессии
const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5; // длина от 5 до 10
  const start = Math.floor(Math.random() * 20) + 1; // первое число от 1 до 20
  const step = Math.floor(Math.random() * 10) + 1;  // шаг от 1 до 10

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  // Случайная позиция пропущенного элемента
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return { progression, correctAnswer };
};

const runBrainProgression = () => {
  const name = greetUser();
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  const rounds = 3;

  while (correctAnswers < rounds) {
    const { progression, correctAnswer } = generateProgression();
    const question = progression.join(' ');

    console.log(`Question: ${question}`);
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

runBrainProgression();