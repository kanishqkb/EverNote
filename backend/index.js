const connectTOmongo=require('./db');
const express = require('express')
var cors = require('cors')

connectTOmongo();



const app = express()
app.use(cors())

const port = 5000
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
    console.log(`iNotebook app listening at http://localhost:${port}`)
  })