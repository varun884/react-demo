const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('cors')()

app.use('/',(req,res) => {
    res.send('Working')
})


mongoose
        .connect('mongodb://localhost:27017/test')
        .then(() => {
            console.log("Database Connected")
            app.listen(8900,() => {
                console.log("Server Connected")
            })
        })