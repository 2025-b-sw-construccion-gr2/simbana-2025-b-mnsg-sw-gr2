const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.81,
  JPY: 145
};

function convert(amount, from, to) {
  if (!rates[from] || !rates[to]) {
    throw new Error(`Moneda no soportada: ${from} o ${to}`);
  }
  return (amount / rates[from]) * rates[to];
}

function listCurrencies() {
  return Object.keys(rates);
}

export { convert, listCurrencies };
