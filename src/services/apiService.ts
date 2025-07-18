// Global API service untuk fetch data dari backend

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getData<T>(endpoint: string): Promise<T> {
  const url = BASE_URL + endpoint;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

// Contoh endpoint spesifik
export async function getFooterData<T>(): Promise<T> {
  return getData<T>("/api/footer");
}

// Tambahkan endpoint lain sesuai kebutuhan
// export async function getUserData<T>(): Promise<T> {
//   return getData<T>("/api/user");
// }
