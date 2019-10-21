const express = require('express')
const router = express.Router()
const { check } = require("express-validator")
const MatpelCreate = require('../actions/matpel/create.action')
const MatpelShow = require('../actions/matpel/show.action')
const MatpelDelete = require('../actions/matpel/delete.action')
const MatpelSearch = require('../actions/matpel/search.action')
const MatpelUpdate = require('../actions/matpel/update.action')

router.post('/', [
    check('nama').not().isEmpty().isLength({ min: 5}),
    check('guru').not().isEmpty(),
    check('kelas').not().isEmpty()
], async (req, res, next) => await new MatpelCreate().exec(req, res, next))

router.get('/', async (req, res, next) =>
    await new MatpelSearch().exec(req, res, next))

router.get('/:id', async(req, res, next) =>
    await new MatpelShow().exec(req, res, next))

router.delete('/:id', async (req, res, next) => 
    await new MatpelDelete().exec(req, res, next))

router.put('/:id', async (req, res, next) => 
    await new MatpelUpdate().exec(req, res, next))

module.exports = router