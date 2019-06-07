require('dotenv').config()
const express = require('express')
const app = express()

//connect mongoDB
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB is ready')
});

//config body parser, route
app.use(express.json())
app.use('/api/topics', require('./routes/api/topics'))

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is ready at port ${PORT}`))