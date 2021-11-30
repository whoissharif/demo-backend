const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/admin', (req, res)=> {
    res.send('admin page');
});

app.listen(4000, () => {
    console.log('server is running');
});