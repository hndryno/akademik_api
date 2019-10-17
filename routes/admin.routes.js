const express = require('express')
const router = express.Router()
const ListAdmin = require('../actions/users/list.action')
const CariAdmin = require('../actions/users/search.action')
const ShowAdmin = require('../actions/users/show.action')
const DeleteAdmin = require('../actions/users/delete.action')
const UpdateAdmin = require('../actions/users/update.action')

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

        let data = await new ListAdmin(search, params).exec()

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

        let data = await new CariAdmin(search, params).exec()

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
        let data = await new ShowAdmin(id).exec()

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
        let data = await new DeleteAdmin(id).exec()
        return res.status(200).json({
            status: 'success',
            data,
            message: 'berhasil menghapus data admin'
        })
    }catch(e){
        return res.status(400).json({
            status: 'error',
            message: e.message
        })
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new UpdateAdmin(id, req).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "admin berhasil diupdate!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router