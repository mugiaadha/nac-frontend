import toast from "react-hot-toast";

export const showToast = {
  success: (message: string, options?: any) => {
    return toast.success(message, {
      icon: "✅",
      style: {
        background: "#22c55e",
        color: "#fff",
      },
      duration: 4000,
      ...options,
    });
  },

  error: (message: string, options?: any) => {
    return toast.error(message, {
      icon: "❌",
      style: {
        background: "#ef4444",
        color: "#fff",
      },
      duration: 4000,
      ...options,
    });
  },

  loading: (message: string, options?: any) => {
    return toast.loading(message, {
      style: {
        background: "#6b7280",
        color: "#fff",
      },
      duration: 4000,
      ...options,
    });
  },

  dismiss: (toastId?: string) => {
    return toast.dismiss(toastId);
  },
};
