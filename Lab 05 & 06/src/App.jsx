import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Todo from "./components/Todo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  if (!isLoggedIn) {
    return (
      <Login onLogin={() => setIsLoggedIn(true)} />
    );
  }


  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar onLogout={() => setIsLoggedIn(false)} />

      <Hero />

      <div className="max-w-6xl mx-auto px-5 py-10 space-y-10">
        <Quote />

        <div id="todo">
          <Todo />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
