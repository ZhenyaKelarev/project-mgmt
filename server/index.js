const express = require("express")
require('dotenv').config()
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const connectDB = require('./config/db.js')
const cors = require('cors')
const port = process.env.PORT || 6000

const app = express()

app.use(cors())

//connect to database
connectDB()

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))