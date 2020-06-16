'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'head'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM heads ORDER BY id DESC LIMIT ?, ?;'
   
        console.log(req.query.limit)

        const limit =parseInt(req.query.limit) >= 1 ? parseInt(req.query.limit) : 100;
        const offset =parseInt(req.query.offset) >= 1 ? parseInt(req.query.offset) : 0;

        db.query(sql,[offset,limit] ,(err, response) => {
            if (err) throw err
            res.json(response)
        })


    },

    detail: (req, res) => {
        let sql = 'SELECT * FROM heads WHERE id = ?'
        db.query(sql, [req.params.headId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },

    global: (req, res) => {

         let sql =  'SELECT *  FROM heads  WHERE id IN (SELECT MAX(id) FROM heads GROUP BY room);'
           db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    lastest: (req, res) => {
        console.log(req.params.headId);
        let sql = 'SELECT * FROM heads WHERE room = ? ORDER BY id DESC'
        db.query(sql, [req.params.headId], (err, response) => {
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