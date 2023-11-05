import { endpoints } from '../constants/endpoints';
import { products } from './products';
import { generate } from './utility';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = endpoints.server.port;

app.use(cors());
app.use(bodyParser.json());

generate(app, products);

app.get('/read', function (req, res) {
  setTimeout(function () {
    res.json({
      data: 'reading products',
    });
  }, 2000);
});

app.get('/test', function (req, res) {
  setTimeout(function () {
    res.json({
      data: 'server is running and accepting requests from this client',
    });
  }, 2000);
});

const todos = ['learn node', 'learn express', 'learn docker', 'learn mongodb'];

app.get('/todo/list', function (req, res) {
  setTimeout(() => {
    res.json({ data: todos, message: 'sent successfully' });
  }, 2000);
});

app.post('/todo/create', function (req, res) {
  const newtodo = req.body?.text;
  if (newtodo) {
    if (todos.indexOf(newtodo) != -1)
      return res.status(409).json({ error: 'duplicate entry' });
    todos.push(req.body.text);
  }
  res.json({ message: 'created successfully' });
});

app.listen(port, function () {
  return console.log('app is running on http://localhost:'.concat(`${port}`));
});
