import chalk from 'chalk';

function info(msg) {
  console.log(chalk.blue('[INFO]'), msg);
}

function success(msg) {
  console.log(chalk.green('[RESULTADO]'), msg);
}

function error(msg) {
  console.log(chalk.red('[ERROR]'), msg);
}

export { info, success, error };
