const express = require('express')
const router = express.Router()
const { check } = require("express-validator")
const KelasCreate = require("../actions/kelas/create.action")
const KelasList = require('../actions/kelas/list.action')
const KelasShow = require('../actions/kelas/show.action')
const KelasUpdate = require('../actions/kelas/update.action')

router.post('/', [
    check('nama').not().isEmpty().isLength({ min: 5 })
], async (req, res, next) => await new KelasCreate().exec(req, res, next))

router.get('/', async (req, res, next) => 
    await new KelasList().exec(req, res, next))

router.get('/:id', async (req, res, next) =>
    await new KelasShow().exec(req, res, next))

router.put('/:id', async (req, res, next) =>
    await new KelasUpdate().exec(req, res, next))

router.delete('/:id', async (req, res, next) =>
    await new KelasDelete().exec(req, res, next))

module.exports = router