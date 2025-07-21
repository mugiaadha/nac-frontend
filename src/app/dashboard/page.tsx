"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Common/Loader";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionKey = searchParams.get("session_key");
    const storedToken = localStorage.getItem("api_token");
    const storedUser = localStorage.getItem("user");

    // Check if session key is provided in URL
    if (sessionKey) {
      localStorage.setItem("session_key", sessionKey);
    }

    // Check if user is authenticated
    if (!storedToken) {
      // No token found, redirect to login
      router.push("/signin");
      return;
    }

    // Parse user data
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/signin");
        return;
      }
    }

    setLoading(false);
  }, [router, searchParams]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">
                Selamat Datang, {user.name || user.email}!
              </h2>
              <p className="text-blue-100">
                Role: {user.role || "User"}
              </p>
              <p className="text-blue-100 text-sm mt-2">
                Session Key: {localStorage.getItem("session_key")?.substring(0, 20)}...
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Informasi Akun
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Status:</span> 
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Aktif
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Profil
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Kelola informasi profil Anda
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Kursus
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Lihat kursus yang tersedia
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Pengaturan
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Ubah pengaturan akun
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={() => {
                localStorage.removeItem("api_token");
                localStorage.removeItem("session_key");
                localStorage.removeItem("user");
                router.push("/signin");
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
