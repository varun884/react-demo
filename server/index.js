const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(require('cors')())

app.use(express.json())

// app.use('/',(req,res) => {
//     res.send('Working')
// })

app.get('/getdata',(req,res) => {
    res.json({
        name:'ram',
        age:41,
        salary:21000
    })
})

app.post('/senddata',(req,res) => {
    console.log(req.body)
    res.json({msg:'Saved Successfully'})
})


app.post('/savetodo',(req,res) => {
    console.log(req.body)
})

mongoose
        .connect('mongodb://localhost:27017/test')
        .then(() => {
            console.log("Database Connected")
            app.listen(8900,() => {
                console.log("Server Connected at 8900")
            })
        })