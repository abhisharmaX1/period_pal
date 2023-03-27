const express = require('express');

const router = express.Router();

// GET all cycles
router.get('/', (req, res) => {
    res.json({msg: "GET all cycles"});
})

// GET a single cycle
router.get('/:id', (req, res) => {
    res.json({msg: "GET a single cycle"});
})

// POST a new cycle
router.post('/', (req, res) => {
    res.json({msg: "POST a new cycle"});
})

// DELETE a cycle
router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a cycle"});
})

// UPDATE a cycle
router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a cycle"});
})


module.exports = router;

// GET /cycles  - gets all cycle documents
// POST /cycles - Creates a new cycle document
// GET /cycles/:id - Gets a single cycle document
// DELETE /cycles/:id - deletes a single cycle
// PATCH/PUT /cycles/:id - updates a single cycle 