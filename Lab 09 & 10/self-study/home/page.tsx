import TodoList from "../components/TodoList";
import ContactForm from "../components/ContactForm";
import LogoutButton from "../components/LogoutButton";

async function getQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  return response.json();
}

export default async function HomePage() {
  const quote = await getQuote();

  return (
    <main className="min-h-screen bg-slate-50">
     <nav className="bg-pink-500 px-5 py-4 text-white">
  <div className="mx-auto flex max-w-6xl items-center justify-between">
    <h1 className="text-xl font-bold">SelfStudy</h1>

    <div className="flex items-center gap-4">
  

      <LogoutButton />
    </div>
  </div>
</nav>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-10">
          <p className="text-sm font-semibold text-pink-600">
            SELF STUDY SYSTEM
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Welcome to your study space
          </h2>

          <p className="mt-3 text-slate-600">
            Self Stuty System, build using Next.js
          </p>
        </div>

        <section className="mb-10 rounded-2xl bg-pink-400 p-8 text-white shadow-lg">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-pink-200">
            Daily Motivation
          </p>

          <blockquote className="text-xl font-semibold leading-8 sm:text-2xl">
            "{quote.quote}"
          </blockquote>

          <p className="mt-4 text-sm text-pink-200">
            — {quote.author}
          </p>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <TodoList />
          <ContactForm />
        </div>
      </section>

      <footer className="border-t bg-white px-5 py-6 text-center text-sm text-slate-500">
        © 2026 SelfStudy System | Developed by Arnav Deore (1 MCA A) for assignment completion
      </footer>
    </main>
  );
}