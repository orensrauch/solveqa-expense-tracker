import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

//const dbUrl = process.env.DB_URL

if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

// Connection URL
mongoose.Promise = global.Promise
// config.mongoUri
mongoose.connect(config.mongoUri, {
   useNewUrlParser: true,
    useCreateIndex: true,
     useUnifiedTopology: true 
    })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
