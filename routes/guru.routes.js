const express = require('express')
const router = express.Router()
const CreateGuru = require('../actions/guru/create.action')
const ListGuru = require('../actions/guru/list.action')
const CariGuru = require('../actions/guru/search.action')
const ShowGuru = require('../actions/guru/show.action')
const DeleteGuru = require('../actions/guru/delete.action')
const UpdateGuru = require('../actions/guru/update.action')

router.post('/', async (req, res, next) => {
    try{
        let data = await new CreateGuru(req).exec()
        return res.status(201).json({
            status: 'Success',
            data,
            message: 'Data guru berhasil ditambahkan!'
        })
    }catch(e){
        throw e
    }
})

router.get('/', async (req, res, next) => {
    try{
        let params = {}
        let search = {}

        let limit = parseInt(req.query.limit)
        if(!limit){
            params.limit = 30
        }else{
            params.limit = limit
        }

        let page = parseInt(req.query.page)
        if(!page){
            params.page = 1
        }else{
            params.page = page
        }

        let data = await new ListGuru(search, params).exec()

        let meta = {
            total: data.total,
            limit: data.limit,
            page: data.page,
            pages: data.pages
        }

        return res.status(200).json({
            status: 'berhasil',
            message: 'paginasi berhasil',
            data,
            meta
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal!',
            message: e.message
        })
    }
})

router.get('/cari/', async (req, res) => {
    try{
        let params = {}
        let search = req.query

        let limit = parseInt(req.query.limit)
        if(!limit){
            params.limit = 30
        }else{
            params.limit = limit
        }

        let page = parseInt(req.query.page)
        if(!page){
            params.page = 1
        }else{
            params.page = page
        }

        let data = await new CariGuru(search, params).exec()

        return res.status(200).json({
            status: 'berhasil',
            data,
            message: 'pencarian data berhasil',
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal!',
            message: e.message
        })
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        let {id} = req.params
        let data = await new ShowGuru(id).exec()

        return res.status(200).json({
            status: 'berhasil',
            data,
            message: 'berhasil show data'
        })
    }catch(e){
        return res.status(400).json({
            status: 'error',
            message: e.message
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        let {id} = req.params
        let data = await new DeleteGuru(id).exec()

        return res.status(200).json({
            status: 'berhasil!',
            data,
            message: 'berhasil menghapus data guru'
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal!',
            message: e.message
        })
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        let {id} = req.params
        let data = await new UpdateGuru(id, req).exec()

        return res.status(200).json({
            status: 'berhasil!',
            data,
            message: 'data berhasil ditambahkan!'
        })
    }catch(e){
        return res.status(400).json({
            status: 'gagal!',
            message: e.message
        })
    }
})

module.exports = router