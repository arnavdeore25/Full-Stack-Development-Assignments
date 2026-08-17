import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUser = {
    username: "admin",
    password: "admin123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === validUser.username &&
      password === validUser.password
    ) {
      setError("");
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Self Study System
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 w-full rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full rounded mb-4"
        />

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;