import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "data", "Book.json");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const readBooks = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeBooks = (books) => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};

//get
app.get("/books", (req, res) => {
  const books = readBooks();
  res.status(200).json(books);

});

app.get("/data.json", (req, res) => {
  const books = readBooks();
  res.status(200).json(books);
});

//post
app.post("/books", (req, res) => {
  const newBook = req.body;
  const books = readBooks();
  newBook.id =
    books.length > 0
      ? books[books.length - 1].id + 1: 1;
  books.push(newBook);
  writeBooks(books);

  res.status(201).json({
    message: "Book Added Successfully",
    book: newBook
  });

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});