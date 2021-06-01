const URL = 'https://apideprodutos.vercel.app/api/products';

export const fetchProduts = async () => {
  const results = await fetch(URL);
  const data = await results.json();
  console.log("chamou a api")
  return data;
};

export const convertCurrency = price => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/100)
}