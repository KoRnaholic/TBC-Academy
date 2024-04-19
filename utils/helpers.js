export async function fetchProducts(url, id) {
  const response = await fetch(`${url}/${id}`);
  const product = await response.json();
  return product;
}
