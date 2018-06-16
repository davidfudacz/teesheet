const router = require('express').Router()
const { Architect } = require('../db/models')

router.param('id', async (req, res, next, id) => {
  try {
    req.architect = await Architect.findById(id)
    next()
  }
  catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const architects = await Architect.findAll()
    res.json(architects)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  res.json(req.architect)
})

router.post('/', async (req, res, next) => {
  try {
    const architect = await Architect.create(req.body)
    res.json(architect)
  }
  catch (err) {
    next(err)
  }
})

module.exports = router