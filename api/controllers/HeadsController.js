'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'head'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM heads ORDER BY id DESC'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })


    },

    detail: (req, res) => {
        let sql = 'SELECT * FROM heads WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE heads SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO heads SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })

        //io.enmit('123');
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM heads WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}