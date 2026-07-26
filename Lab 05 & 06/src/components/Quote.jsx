import axios from "axios";
import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/quotes/random"
      );

      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-black">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold">
          Daily Motivation
        </h2>

        <button
          onClick={fetchQuote}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          New Quote
        </button>

      </div>

      <p className="italic text-lg">
        "{quote}"
      </p>

      <p className="mt-3 font-semibold text-right">
        - {author}
      </p>

    </div>
  );
}

export default Quote;