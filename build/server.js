'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsonParser = _bodyParser2.default.json();

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.items = [];
    this.setId = 0;
  }

  _createClass(Storage, [{
    key: 'findIndexOf',
    value: function findIndexOf(id) {
      var index = -1;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          index = i;
          break;
        }
      }
      return index;
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var index = this.findIndexOf(id);

      if (index !== -1) {
        var item = this.items[index];
        this.items.splice(index, 1);
        return item;
      } else {
        return -1;
      }
    }
  }, {
    key: 'add',
    value: function add(name) {
      var item = {
        name: name,
        id: this.setId
      };
      this.items.push(item);
      this.setId++;
      return item;
    }
  }, {
    key: 'update',
    value: function update(name, id) {
      var index = this.findIndexOf(id);

      if (index === -1) {
        return {
          item: this.add(name),
          type: 'add'
        };
      } else {
        this.items[index].name = name;
        return {
          item: this.items[index],
          type: 'update'
        };
      }
    }
  }]);

  return Storage;
}();

;

var storage = new Storage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('/items', function (request, response) {
  response.json(storage.items);
});

app.post('/items', jsonParser, function (req, res) {
  if (!('name' in req.body)) {
    // Bad request
    return res.sendStatus(400);
  }

  var item = storage.add(req.body.name);
  // Created status
  res.status(201).json(item);
});

app.delete('/items/:id', function (req, res) {
  var item = storage.delete(req.params.id);
  if (item === -1) {
    // Not Found
    return res.sendStatus(404);
  } else {
    // OK
    res.status(200).json(item);
  }
});

app.put('/items/:id', jsonParser, function (req, res) {
  if (!('name' in req.body) || !('id' in req.body) || req.params.id != req.body.id) {
    return res.sendStatus(400);
  }

  var result = storage.update(req.body.name, req.params.id);
  if (result.type === 'add') {
    res.status(201).json(result.item);
  } else {
    res.status(200).json(result.item);
  }
});

app.listen(process.env.PORT || 8080, process.env.IP);