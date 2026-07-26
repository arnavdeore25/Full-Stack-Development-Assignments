import { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  return (
    <div className="bg-white text-black rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-3 rounded w-full"
          required
        ></textarea>

        <button
          className="bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default ContactForm;