// read the .env file if dev environment
if (process.env.NODE_ENV !== 'production') {
  const result = require('dotenv').config()
  if (result.error) {
    console.log("Env vars couldn't be read.")
    throw result.error
  }
}

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
}

export default config
