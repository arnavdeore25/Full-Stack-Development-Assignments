# Lab 07

A simple book management app with a React frontend and an Express backend.

## Overview
This lab demonstrates a basic full-stack application where the frontend lets users add books, and the backend stores them in a JSON file using Node.js file system.

## Features
- Add book title and author
- Fetch books from the backend
- Save data in `Book.json`
- Display all saved books on the frontend
- CORS enabled for local client-server communication

## Tech Stack
- React
- Vite
- Express.js
- JSON file storage

## Project Structure
- `lab7/client/` – frontend React app
- `lab7/server/` – backend Express server
- `lab7/server/data/Book.json` – saved book records

## How to run
1. Open the `Lab 07` folder.
2. Start the backend server:
   ```bash
   cd lab7/server
   node server.js
   ```
3. Start the frontend app:
   ```bash
   cd lab7/client
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite in the browser.

## Purpose
This lab focuses on understanding the connection between a frontend and backend in a full-stack setup, using a simple CRUD-like flow for storing data.

Created as part of the Full Stack Development coursework.
