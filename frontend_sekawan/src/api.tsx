export async function getVans() {
  //   throw new Error("Failed to fetch vans");

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
}
