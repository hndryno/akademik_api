const express = require('express')
const router = express.Router()
const GuruCreate = require('../actions/guru/create.action')
const GuruDelete = require('../actions/guru/delete.action')
const GuruList = require('../actions/guru/list.action')
const GuruShow = require('../actions/guru/show.action')
const { check } = require("express-validator")
const GuruUpdate = require('../actions/guru/update.action')

router.post('/', [
    check('nama').not().isEmpty().isLength({ min:5 }),
    check('umur').not().isEmpty(),
    check('jenis_kelamin').not().isEmpty(),
    check('alamat').not().isEmpty().isLength({ min:5 }),
], async (req, res, next) => await new GuruCreate().exec(req, res, next))

router.delete('/:id', async (req, res, next) => 
    await new GuruDelete().exec(req, res, next))

router.get('/', async (req, res, next) => 
    await new GuruList().exec(req, res, next))

router.get('/:id', async (req, res, next) => 
    await new GuruShow().exec(req, res, next))

router.put('/:id', async (req, res, next) => 
    await new GuruUpdate().exec(req, res, next))

module.exports = router