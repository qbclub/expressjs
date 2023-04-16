var express = require('express')
var cors = require('cors')
var fs = require('fs')


var app = express()

const hostname = '127.0.0.1'
const port = 3000

app.use(cors())



app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.send('Привет')
})

app.get('/bye', (req, res) => {
    res.send('Пока')
})

app.get('/html', (req, res) => {
    res.send('<h1>Заголовок</h1>')
})
app.get('/name', (req, res) => {
  
   let name = req.query.youName

   fs.appendFile('names.txt', `${name} \n` , function (err) {
     if (err) throw err;
     console.log('Updated!');
   });
   let changeName  =  name.split('').reverse().join('').toUpperCase()

    res.send(changeName)
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
