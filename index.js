const express = require('express')
const route = require('./route/route')
const app = express()
const cors = require('cors')

app.use(cors({
    origin:'*'
}))



app.use('/route' , route)

app.listen(3004, () => {
    console.log('server 3004')
})