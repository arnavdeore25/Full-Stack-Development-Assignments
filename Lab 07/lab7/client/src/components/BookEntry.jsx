import { useEffect} from "react";
import {useState} from "react";

function BookEntry() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const response = await fetch("http://localhost:5000/data.json");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const book = {
      bookName,
      author,
    };

    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      const data = await response.json();

      setBookName("");
      setAuthor("");


      getBooks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">

  <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
    Book Entry System
  </h1>

  <form onSubmit={handleSubmit} className="space-y-4">

    <input type="text" placeholder="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      required />

    <input type="text" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      required />

    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
      Add Book
    </button>

  </form>

  <hr className="my-6" />

  <h2 className="text-2xl font-semibold mb-4 text-gray-700">
    Available Books
  </h2>

  {books.length === 0 ? (
    <p className="text-gray-500 text-center"> No Books Found </p>
  ) : (
    <div className="space-y-3">
      {books.map((book) => (
        <div key={book.id} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-blue-600">
            {book.bookName}
          </h3>
          <p className="text-gray-600">
            <span className="font-medium">Author:</span> {book.author}
          </p>
        </div>
      ))}
    </div>
  )}

</div>
  );
}

export default BookEntry;
