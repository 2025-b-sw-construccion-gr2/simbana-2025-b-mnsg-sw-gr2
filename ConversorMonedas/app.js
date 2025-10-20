import * as converter from './libs/converter.js';
import * as logger from './libs/logger.js';
import * as input from './libs/input.js';

async function main() {
  logger.info('Bienvenido al conversor simple de monedas.');
  const currencies = converter.listCurrencies();

  while (true) {
    const from = await input.getCurrency('Moneda de origen', currencies);
    const to = await input.getCurrency('Moneda de destino', currencies);
    const amount = await input.getAmount(`Ingrese la cantidad en ${from}: `);

    try {
      const result = converter.convert(amount, from, to);
      logger.success(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
    } catch (err) {
      logger.error(err.message);
    }

    const again = (await input.ask('¿Desea otra conversión? (S/N): ')).trim().toUpperCase();
    if (again !== 'S') break;
  }

  logger.info('Gracias por usar el conversor. ¡Hasta pronto!');
}

main();
