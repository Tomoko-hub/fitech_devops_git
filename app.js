const express = require('express')
const app = express()
const port = 3000

app.get('/', () => {
    res.send("Hello World")
})

app.get('/feature_1', () => {
    res.status("This is a change from feature branch.")
})

app.get('/feature_2', () => {
    res.status("This is a change from feature_2 branch.")
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
