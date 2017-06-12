import bodyParser from 'body-parser';

import express from 'express';

var jsonParser = bodyParser.json();

class Storage {
  constructor() {
    this.items = [];
    this.setId = 0;
  }

  findIndexOf(id) {
    let index = -1;
    for (let i=0; i<this.items.length; i++) {
      if (this.items[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  delete(id) {
    let index = this.findIndexOf(id);

    if (index !== -1) {
      let item = this.items[index];
      this.items.splice(index,1);
      return item;
    }
    else {
      return -1;
    }
  }

  add(name) {
    let item = {
      name: name,
      id: this.setId 
    };
    this.items.push(item);
    this.setId++;
    return item;
  }

  update(name, id) {
    let index = this.findIndexOf(id);

    if (index === -1) {
      return {
        item: this.add(name),
        type: 'add'
      }
    }
    else {
      this.items[index].name = name;
      return {
        item: this.items[index],
        type: 'update'
      }
    }
  }
};

let storage = new Storage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

let app = express();
app.use(express.static('public'));

app.get('/items', (request, response) => {
    response.json(storage.items);
});

app.post('/items', jsonParser, (req, res) => {
  if (!('name' in req.body)) {
    // Bad request
    return res.sendStatus(400);
  }

  let item = storage.add(req.body.name);
  // Created status
  res.status(201).json(item);
});

app.delete('/items/:id', (req, res) => {
  let item = storage.delete(req.params.id);
  if (item === -1) {
    // Not Found
    return res.sendStatus(404);
  }
  else {
    // OK
    res.status(200).json(item);
  }
})

app.put('/items/:id', jsonParser, (req, res) => {
  if (!('name' in req.body) || !('id' in req.body) || (req.params.id != req.body.id)) {
    return res.sendStatus(400);
  }

  let result = storage.update(req.body.name, req.params.id);
  if (result.type === 'add') {
    res.status(201).json(result.item);
  }
  else {
    res.status(200).json(result.item);
  }
})

app.listen(process.env.PORT || 8080, process.env.IP);



