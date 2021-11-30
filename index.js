const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());



app.listen(4000, () => {
    console.log('server is running');
});