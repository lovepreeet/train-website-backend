const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user');

const app = express();
app.use(express.json())
const PORT = 5000;
app.use(cors())


app.get('/users', async (req, res) => {
    let user = await User.find();
    if (user) {
        res.send({ result: user });
    } else {
        res.send({ error: 'User Not Found' });
    }
})

app.listen(PORT);