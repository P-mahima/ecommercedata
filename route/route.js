const data = require('../dummydata.js/data')

const route = require('express').Router()


route.get('/data' , (req, res) => {
    res.send(data)
})

module.exports = route
