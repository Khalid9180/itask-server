const router = require("express").Router();
const express = require ("express")
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { listIndexes } = require("../models/Task");
const Task = require("../models/Task");
const User = require("../models/User.model");
const List = require("../models/List");
const { response } = require("express");


//Create a List :
router.post("/", isAuthenticated, (req, res) => {
    const title = req.body.title
    const id = req.payload._id
    List.create({title, user: id})
    .then((response) => res.json(response))
    .catch(err => res.json(err))
})


//Update a List :
router.post("/update/:id", isAuthenticated, (req,res) => {
    const id = req.params.id
    const {title} = req.body;
    List.findByIdAndUpdate (id, {title}, {new: true})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


//Read a List :
router.get("/details/:id", isAuthenticated, (req,res) => {
    const id = req.params.id
List.findById(id)
.then(response => res.json(response))
.catch(err => res.json(err))
})


//Delete a List:
router.delete("/delete/:id", isAuthenticated, (req, res) => {
    const id = req.params.id
    List.deleteOne( {_id: id})
    .then(response => res.json(response))
.catch(err => res.json(err))
})

module.exports = router;