const URL = 'https://apideprodutos.vercel.app/api/classes';

export async function fetchClasses() {
  const results = await fetch(URL);
  const data = await results.json();
  return data;
};
