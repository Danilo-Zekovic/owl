// Test server so that one can run the app localy at localhost
import fs from 'fs'
import http from 'http'
import https from 'https'
import express from 'express'
import path from 'path'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import configRoutes from './server/routes.js'
import graphql from 'graphql'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'

import schema from './server/graphql'

import certificateKeys from './KEY_RING.js'

const dbName = 'owl'

// should be const in es6
const app = express(),
  router = express.Router()

const server = http.createServer(app)

// compress outbound service
app.use(compression())

// cors allows fetching images on local-hosted server
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// graphql server
// for api calls to graphql
app.use('/graphql', graphqlHTTP({
  schema:schema,
  grapigl: true
}))

configRoutes(router, server)
app.use('/', router)

app.use(express.static(path.join(__dirname, '/public')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public','index.html'));
})

// configure mongoose to use native promises
mongoose.Promise = global.Promise

// connect to mongo db
mongoose.connect('mongodb://localhost' + dbName)

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
)
