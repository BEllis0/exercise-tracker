const router = require('express').Router();
let User = require('../models/user.model');

// .get handles get requests to the database; returns all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

// handles get requests; returns unique user
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// .post handles post requests to add to the database
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    // .save is a mongoose method to save to db
    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;