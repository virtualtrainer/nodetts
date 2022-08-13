const express = require('express')
const gtts = require('node-gtts')('en')
var path = require('path')
const app = express()
app.get('/speech',(req,res) => {

    gtts.save("audio.mp3",req.query.text,function () {
        console.log("converted")
    }

    )

})

app.listen(process.env.PORT || 8080)