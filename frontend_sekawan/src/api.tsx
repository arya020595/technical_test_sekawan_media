export async function getVans(id: any = null) {
  // const customErrorCode = 404;
  // const customErrorText = "Resource not found";

  // throw {
  //   message: "Failed to fetch vans",
  //   statusText: customErrorText,
  //   status: customErrorCode,
  // };

  const baseURL = "https://dummyjson.com";
  const url = id ? `${baseURL}/products/${id}` : `${baseURL}/products`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getHostVans(id: any = null) {
  const baseURL = "https://dummyjson.com";
  const url = id ? `${baseURL}/products/${id}` : `${baseURL}/products`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function authLogin(username: string, password: string) {
  const baseURL = "https://dummyjson.com";
  const url = `${baseURL}/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      // username: "kminchelle",
      // password: "0lelplR",
      username: username,
      password: password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText, // Menampilkan teks deskripsi status HTTP (misal: OK, Not Found, dll.)
      status: response.status, // Menampilkan kode status HTTP (misal: 200, 404, dll.)
    };
  }

  return data;
}
