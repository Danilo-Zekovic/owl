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

import passport from 'passport'
import flash from 'connect-flash'
import session from 'express-session'
import cookieParser from 'cookie-parser'
//import setUpPassport from './server/setuppassport.js'

import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'

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

// setting up for authentication
app.use(cookieParser())
app.use(session({
  secret:"onroieun48j9u45n98gnn9>*H<&HUEB(Unuwnefjdns&%",
  resave:true,
  saveUninitialized:true
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

// graphql server
// for api calls to graphql
app.use('/graphql', graphqlHTTP(req => ({
  schema:schema,
  graphiql: true,
  pretty:true
})))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

configRoutes(router, server)
app.use('/', router)

app.use(express.static(path.join(__dirname, '/public')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public','index.html'));
})

// configure mongoose to use native promises
mongoose.Promise = global.Promise

// connect to mongo db
mongoose.connect('mongodb://localhost/' + dbName)

// passport authentication
//setUpPassport()

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
)
