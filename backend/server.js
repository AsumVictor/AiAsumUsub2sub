const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const usersRoutes = require("./routes/users")
const linksRoutes = require("./routes/links")
const subscriptionsRoutes = require("./routes/subscription")
const cors = require("cors");
const corOptions = require("./config/corsOptions");

app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.method, req.path)
    next()
})

app.use(cors(corOptions));

app.get("/", (req, res)=>{
    res.json({message: 'welcome to app'})
})

app.use('/users', usersRoutes)
app.use('/links', linksRoutes)
app.use('/subscriptions', subscriptionsRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    app.listen(process.env.PORT, function () {
        console.log(`Running on port ${process.env.PORT}`)
    })
}).catch(err=>{
    console.log(err)
})

