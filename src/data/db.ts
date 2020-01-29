import mongoose from 'mongoose'
import config from '../config'

// Connect Mongodb URI
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

// Handle Error
db.on('error', err => {
  console.error.bind(console, 'connection error:')
  console.error(err)
})

// When successfully connected
db.on('connected', () => {
  console.log('DB connected: ' + config.MONGODB_URI)
})

// When connection is open
db.once('open', () => {
  console.log('DB connection open')
}).on('error', err => {
  console.log(err)
})

// When disconnected
db.on('disconnected', () => {
  console.log('DB disconnected')
})

export default db
