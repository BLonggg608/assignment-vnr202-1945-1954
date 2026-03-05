import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Helper function to extract user-friendly error messages
export const getErrorMessage = (error, fallbackMessage) => {
  // Priority 1: Backend error message from response.data.error
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }

  // Priority 2: Backend error message from response.data.message
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  // Priority 3: Fallback to provided hardcoded message
  if (fallbackMessage) {
    return fallbackMessage;
  }

  // Priority 4: Default generic message based on status code
  if (error?.response?.status) {
    switch (error.response.status) {
      case 401:
        return "🔐 Thông tin đăng nhập không chính xác";
      case 403:
        return "🚫 Bạn không có quyền truy cập";
      case 404:
        return "🔍 Không tìm thấy tài nguyên";
      case 500:
        return "⚠️ Lỗi hệ thống, vui lòng thử lại sau";
      default:
        return "❌ Đã xảy ra lỗi, vui lòng thử lại";
    }
  }

  // Priority 5: Network or other errors
  return error?.message || "❓ Đã xảy ra lỗi không xác định";
};

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null; // Return null if the cookie is not found
}

// Helper function to check if user is logged in
export const checkLogin = () => {
  // Prevent execution during build time
  if (typeof window === "undefined") {
    return false;
  }

  try {
    // Check if auth_store exists in localStorage
    const authStore = localStorage.getItem("auth_store");
    if (!authStore) {
      return false;
    }

    // Parse the stored auth data
    const parsedAuthStore = JSON.parse(authStore);
    
    // Check if user data exists and has valid user info
    const user = parsedAuthStore?.state?.user;
    if (!user) {
      return false;
    }

    // Check if user has valid ID and is not the default guest user
    const hasValidId = user.id || user.profile?.id;
    const isNotGuest = user.personalInfo?.displayName !== "Guest" || 
                      user.profile?.personalInfo?.displayName !== "Guest";
    
    return hasValidId && isNotGuest;
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
};
