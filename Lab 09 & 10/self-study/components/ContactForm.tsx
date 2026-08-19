"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !message) {
      return;
    }

    setSubmitted(true);
    setName("");
    setMessage("");
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Contact Us
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Have feedback about the SelfStudy system?
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[ink-500"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-pink-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-pink-500 py-3 font-medium text-white hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-600">
          Thank you! Your message has been submitted.
        </p>
      )}

    </section>
  );
}