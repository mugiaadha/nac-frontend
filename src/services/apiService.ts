import { LoginResponse } from "@/types/api";
// Global API service untuk fetch data dari backend

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getData<T>(endpoint: string): Promise<T> {
  const url = BASE_URL + endpoint;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function postData<T>(endpoint: string, body: any): Promise<T> {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Failed to post data");
  return res.json();
}

// Contoh endpoint spesifik
export async function getSiteData<T>(): Promise<T> {
  return getData<T>("/api/site-settings");
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const res = await fetch(BASE_URL + "/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const response = await res.json();

    if (!res.ok) {
      return { error: response?.message || "Login gagal" };
    }

    // Response structure: { success, data: { token, user, session_key }, message }
    if (response.success && response.data) {
      return {
        token: response.data.token,
        user: response.data.user,
        session_key: response.data.session_key,
        message: response.message,
      };
    }

    return { error: response.message || "Login gagal" };
  } catch (err: any) {
    return { error: err.message || "Terjadi kesalahan" };
  }
}

export async function logout(): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  try {
    const token = localStorage.getItem("api_token");
    const res = await fetch(BASE_URL + "/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        success: false,
        error: data?.error || data?.message || "Logout gagal",
      };
    }
    return { success: true, message: data?.message };
  } catch (err: any) {
    return { success: false, error: err.message || "Terjadi kesalahan" };
  }
}
