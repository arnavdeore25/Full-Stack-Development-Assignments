"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const user = {
  username: "arnav",
  password: "arnavv",
};

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    if (username === user.username && password === user.password) {
      sessionStorage.setItem("loggedIn", "true");
      router.push("/home");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-pink-600">
          SelfStudy
        </h1>

        <p className="mt-2 text-slate-500">
          Login to continue learning
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-pink-300"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-pink-300"
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          Login
        </button>
      </form>

    </div>
  );
}