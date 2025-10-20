import readline from 'readline';
import * as logger from './logger.js';

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Función para elegir moneda.
async function getCurrency(prompt, options) {
  while (true) {
    try {
      const answer = (await ask(`${prompt} (${options.join(', ')}): `)).toUpperCase();
      if (!options.includes(answer)) throw new Error('Moneda no válida');
      return answer;
    } catch (err) {
      logger.error(err.message);
    }
  }
}

// Función para obtener cantidad.
async function getAmount(prompt) {
  while (true) {
    const value = Number(await ask(prompt));
    if (value > 0) return value;
    logger.error('Cantidad inválida');
  }
}

export { ask, getCurrency, getAmount };