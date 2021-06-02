const URL = 'https://apideprodutos.vercel.app/api/products';

export async function fetchProduts() {
  const results = await fetch(URL);
  const data = await results.json();
  return data;
};

export const convertCurrency = price => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/100)
}