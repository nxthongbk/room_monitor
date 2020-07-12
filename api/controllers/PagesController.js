'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'head'

var rooms

module.exports = {


    get: (req, res) => {

        var user =  req.session.user,
        userId = req.session.userId;
    
        if(userId == null){
            res.redirect("/signin");
            return;
        }

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

       var user =  req.session.user,
        userId = req.session.userId;
    
        if(userId == null){
            res.redirect("/signin");
            return;
        }


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

    signin: (req, res) => {

        var message = '';

        res.render('pages/signin', {message: message});  
            
    },
    signup: (req, res) => {
        var message = '';
     
        res.render('pages/signup',{message: ''});
      
        },
    register: (req, res) => {
        var message = '';

              var post  = req.body;
              var name= post.user_name;
              var pass= post.password;
              var email= post.email;

         
              let sql = "INSERT INTO accounts(username,email,password) VALUES ('" + name + "','" +email+"','"+ pass + "')";
         
            //   let sql="SELECT * FROM accounts WHERE username='"+name+"' and password = '"+pass+"'";
              console.log(sql);
                db.query(sql, (err, response) => {
                    if (err) throw err
                   // console.log(response.length);
                    // if(response.length){
                     //var query = db.query(sql, function(err, result) {
                     message = "Succesfully! Your account has been created.";
                     res.render('pages/signin',{message: message});
                // }
                 //   else
                 //   {
                //        message = "Wrong info .";
                ////        res.render('pages/signup',{message: message});
                //    }
                     });

        },



    login: (req, res) => {
        var message = '';
        var message = '';
        var sess = req.session; 

        var post  = req.body;
        var name= post.user_name;
        var pass= post.password;
        let sql="SELECT * FROM accounts WHERE username='"+name+"' and password = '"+pass+"'";
         db.query(sql, (err, response) => {
            if (err) throw err
            if(response.length){
                 console.log(response[0].id);
                 req.session.userId = response[0].id;
                 req.session.user = response[0];
                 
                res.redirect('/dashboard');
            }
            else
            {
                // message = 'Wrong Credentials.';
                res.redirect('/signin');
            }     
        })
        }











    
    
}