"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    sessionStorage.removeItem("loggedIn");
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
}