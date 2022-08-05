const router = require("express").Router();
const express = require ("express")
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const Task = require("../models/Task");
const User = require("../models/User.model");


//Create a List :
router.post("/", isAuthenticated, (req, res) => {
    const title = req.body.title
    const id = req.payload._id
    User.findById(id)
    .then((user) =>  List.create({title: title, tasks: [...user.tasks]})
    .then(response => res.json(response))
    .catch(err => res.json(err)))
    
})

module.exports = router;