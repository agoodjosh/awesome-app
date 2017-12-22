const express  = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    const stuff = {
        name: 'Stuffins',
        message: 'Here is some stuff'
    };

    res.send(stuff);

});

app.get('/api/better-stuff', (req, res) => {
    const betterStuff = {
        better: 'This is the real shtuff',
        message: 'The mostest gooder stuff that is legitness'
    };

    res.send(betterStuff);
});

app.get('*', (req, res) => {
    res.send('<h1>Awesome Appsadfsdafsaf Working!</h1>');
});

app.listen(PORT, ()=> {
   console.log('Server Running at localhost: ' + PORT)
});

