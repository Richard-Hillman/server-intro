
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send = (
        "fingers are spiders"
        )
}),

app.get('/badforkids', (req, res) => {
    res.json = ([
        {
        bad:'bleach'
        },
        {
        bad:'sandwhiches'
        },
        {
        bad:'owls'
        }
    ])
}),

app.get('/badforadults', (req, res) => {
    res.json = ([
        {
        bad:'sugar'
        },
        {
        bad:'ben&Jerrys'
        },
        {
        bad:'owl food'
        }
    ])
}),


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})