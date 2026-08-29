# Lab 08

A full MERN stack CRUD application for managing tasks.

## Overview
This lab implements a complete MERN stack CRUD application for managing tasks. The app uses MongoDB for data storage, Express.js for the backend API, React for the frontend interface, and Node.js to connect the full stack together. Users can create, view, update, and delete tasks using a React interface connected to a MongoDB database.

## Tech Stack
- React
- React Router
- Express.js
- MongoDB
- Mongoose
- CORS

## Project Structure
- `client/` – frontend React app
- `server/` – backend API and database logic
- `server/models/Create.js` – MongoDB schema for tasks

## Features
- Add new tasks
- View all tasks
- Mark tasks as completed
- Update existing tasks
- Delete tasks
- Routing between task pages

## How to run
1. Open the `Lab 08` folder.
2. Start MongoDB locally on `mongodb://localhost:27017/Tasks`.
3. Start the backend server:
   ```bash
   cd server
   node server.js
   ```
4. Start the frontend app:
   ```bash
   cd client
   npm install
   npm run dev
   ```
5. Open the browser and use the application.

## Purpose
This lab focuses on connecting a React frontend to a Node.js backend and persisting data in MongoDB using Mongoose.

Created as part of the Full Stack Development coursework.
