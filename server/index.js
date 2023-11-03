var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/todo/test', function (req, res) {
  setTimeout(function () {
    res.json({
      data: 'server is running and accepting requests from this client',
    });
  }, 2000);
});

const todos = ['learn node', 'learn express', 'learn docker', 'learn mongodb'];

app.get('/todo/list', function (req, res) {
  console.log('list accessed');
  setTimeout(() => {
    res.json({ data: todos, message: 'sent successfully' });
  }, 2000);
});

app.post('/todo/create', function (req, res) {
  const newtodo = req.body?.text;
  if (newtodo) {
    if (todos.includes(newtodo))
      return res.status(409).json({ error: 'duplicate entry' });
    todos.push(req.body.text);
  }
  console.log(todos);
  res.json({ message: 'created successfully' });
});

app.listen(port, function () {
  console.log('app is running on http://localhost:'.concat(port));
});
