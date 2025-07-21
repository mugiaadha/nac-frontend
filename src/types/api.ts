export interface LoginResponse {
  token?: string;
  error?: string;
  message?: string;
  session_key?: string;
  user?: {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
    // tambahkan field lain sesuai kebutuhan
  };
}
