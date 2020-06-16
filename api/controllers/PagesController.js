'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'head'

var rooms

module.exports = {


    get: (req, res) => {

       // let sql = 'SELECT DISTINCT room FROM heads;'

        let sql =  'SELECT *  FROM heads  WHERE id IN (SELECT MAX(id) FROM heads GROUP BY room);'
           db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
                console.log(response);
                rooms = response
            //  res.render('pages/dashboard', { 
            //     rooms: response
            // });  
            
        })

        sql = 'SELECT * FROM heads ORDER BY id DESC'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
             res.render('pages/dashboard', { 
                rooms :rooms,
                data: response
            });  
            
        })
    },

    statictis: (req, res) => {

       // let sql = 'SELECT DISTINCT room FROM heads;'

        let sql =  'SELECT *  FROM heads  WHERE id IN (SELECT MAX(id) FROM heads GROUP BY room);'
           db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
                console.log(response);
                rooms = response
            //  res.render('pages/dashboard', { 
            //     rooms: response
            // });  
            
        })

        sql = 'SELECT * FROM heads ORDER BY id DESC'
        db.query(sql, (err, response) => {
            if (err) throw err
            //res.json(response)
             res.render('pages/statictis', { 
                rooms :rooms,
                data: response
            });  
            
        })
    },
}