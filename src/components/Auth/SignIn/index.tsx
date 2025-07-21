"use client";
import { login } from "@/services/apiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import { showToast } from "@/utils/showToast";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);
  const loginUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Memproses login...");

    // Minimum delay untuk UX yang lebih baik
    const [data] = await Promise.all([
      login(loginData.email, loginData.password),
      new Promise((resolve) => setTimeout(resolve, 1500)), // minimum 1.5 detik
    ]);

    try {
      if (data.error) {
        toast.error(data.error, { id: toastId });
        setLoading(false);
        return;
      }
      if (data.token) {
        localStorage.setItem("api_token", data.token);
        if (data.session_key)
          localStorage.setItem("session_key", data.session_key);
        if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

        toast.dismiss(toastId);
        toast.success("Login berhasil", {
          id: toastId,
          icon: "✅",
          style: { background: "#22c55e", color: "#fff" },
        });

        setLoading(false);
        const user = data.user;
        const redirectPath = getRedirectPath(user);
        router.push(redirectPath);
      } else {
        toast.error(data.message || "Login gagal", { id: toastId });
        setLoading(false);
      }
    } catch (err: any) {
      toast.error(err.message || "Terjadi kesalahan koneksi", { id: toastId });
      setLoading(false);
    }
  };

  // Helper function untuk redirect berdasarkan role
  const getRedirectPath = (user: any): string => {
    switch (user.role) {
      case "admin":
        // Redirect ke Laravel backend admin
        window.location.href = `/admin?session_key=${localStorage.getItem(
          "session_key"
        )}`;
        return "/"; // fallback

      case "instructor":
        // Redirect ke Laravel backend instructor
        window.location.href = `/instructor/dashboard?session_key=${localStorage.getItem(
          "session_key"
        )}`;
        return "/"; // fallback

      case "user":
        // Redirect ke external URL untuk user
        window.location.href = `http://202.10.41.215/dasboard?session_key=${localStorage.getItem(
          "session_key"
        )}`;
        return "/"; // fallback

      default:
        return `/dashboard?session_key=${localStorage.getItem("session_key")}`;
    }
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-black/15 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-black/15 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-black">
          OR
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-black outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-black outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
      >
        Forgot Password?
      </Link>
      <p className="text-body-secondary text-white text-base">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;
