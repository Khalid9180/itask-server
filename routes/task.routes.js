const router = require("express").Router();
const express = require ("express")
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const List = require("../models/List");
const Task = require("../models/Task");


//Create a Task :
router.post("/", isAuthenticated, (req, res) => {
    const {title, description, completed, date, userId } = req.body;
    const id = req.payload._id
    Task.create({title, description, date, user: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


//Update a Task :
router.post("/update/:id", isAuthenticated, (req,res) => {
    const id = req.params.id
    const {title, description, completed, date, list } = req.body;
    Task.findByIdAndUpdate (id, {title, description, completed, date, list }, {new: true})
    .then(response => 
        {return List.findByIdAndUpdate(list, { $push: { tasks: id }})})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

//Read a Task :
router.get("/details/:id", isAuthenticated, (req,res) => {
    const id = req.params.id
Task.findById(id)
.then(response => res.json(response))
.catch(err => res.json(err))
})

//Get all Tasks :
router.get("/", isAuthenticated, (req,res) => {
    const id = req.payload._id
Task.find({user: id})
.then(response => res.json(response))
.catch(err => res.json(err))
})




//Delete a Task :
router.delete("/delete/:id", isAuthenticated, (req, res) => {
    const id = req.params.id
    Task.deleteOne( {_id: id})
    .then(response => res.json(response))
.catch(err => res.json(err))
})




module.exports = router;