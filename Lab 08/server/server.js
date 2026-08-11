import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { error, log } from 'node:console';
import dotevnv from 'dotenv'
import userModel from './models/Create.js'

const app = new express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Tasks");

app.get('/', (req, res) => {
  userModel.find({}).then(users => res.json(users)).catch(err => res.json(err))
})
app.post("/createTask", (req, res)=> {
  userModel.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
})

app.put('/completeTask/:id', (req, res) => {

    const id = req.params.id;

    userModel.findByIdAndUpdate(
        id,
        { completed: req.body.completed },
        { new: true }
    )
    .then(task => res.json(task))
    .catch(err => res.json(err));

});

app.get('/getTask/:id', (req, res) => {
  const id = get.params.id;
  useModel.findById({id}).then(users => res.json(users)).catch(err => res.json(err))
})

app.put('/updateTask/:id', (req, res) => {

    const id = req.params.id;

    userModel.findByIdAndUpdate(
        id,
        { name: req.body.name },
        { new: true }
    )
    .then(task => res.json(task))
    .catch(err => res.json(err));

});

app.delete('/deleteTask/:id', (req, res) => {

    const id = req.params.id;

    userModel.findByIdAndDelete(id)
        .then(task => res.json(task))
        .catch(err => res.json(err));

});


app.listen(PORT, () => {
  console.log("Server running!!!!");  
})