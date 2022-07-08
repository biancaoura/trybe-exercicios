// EXERCÍCIO 2 - MOSTRAR TOP 10 CRIPTOMOEDAS

async function fetchCurrency() {
  const url = 'https://api.coincap.io/v2/assets';

  const currency = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => `Something went wrong ${error}`);

  return currency;
}

// EXERCÍCIO BÔNUS - CONVERTER USD PARA BRL

async function fetchBrl() {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  const real = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd.brl)
    .catch((error) => `Something went wrong ${error}`);

  return real;
}

async function toDOM() {
  const topCrypto = document.getElementById('currency');

  const currency = await fetchCurrency();
  const real = await fetchBrl();

  currency.filter((curr) => parseFloat(curr.rank) < 11).forEach((el) => {
    const listItem = document.createElement('li');
    const converted = (parseFloat(el.priceUsd) * parseFloat(real)).toFixed(2);

    listItem.innerText = `${el.name} (${el.symbol}: ${converted})`;
    topCrypto.appendChild(listItem);
  });
}

window.onload = () => toDOM();
