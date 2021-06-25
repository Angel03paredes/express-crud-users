const {Router} = require('express');

const UC = require('../controller/UserController');

const app = Router();


app.get('/',UC.getUsers);

app.get('/:id',UC.getUser);

app.post('/',UC.addUser);

app.post('/:id',UC.updateUser);

app.delete('/:id',UC.deleteUser);

module.exports = app;