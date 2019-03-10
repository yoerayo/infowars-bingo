var express = require('express');
var fs = require('fs');
var router = express.Router();

var freeSquare = "GLOBALISTS";

var squareOptions = [];
fs.readFile('data/square-options.txt', 'utf-8', (err, data) => {
  data.split("\n").forEach((option) => {
    if (option.trim().length > 0)
      squareOptions.push(option);
  });
  squareOptions.sort();
});

function getVariableSquares() {
  squares = [];
  for (var i = 0; i < 25; i++) {
    var square;
    if (i === 12) {
      square = freeSquare;
    } else {
      do {
        var optionIdx = Math.floor(Math.random() * squareOptions.length);
        square = squareOptions[optionIdx];
      } while (squares.includes(square));
    }
    squares.push(square);
  }
  return squares;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  squares = getVariableSquares();
  res.render('index', { title: 'Infowars Bingo', squares: squares });
});

router.get('/square-options', function (req, res, next) {
  res.render('square-options', { title: 'Possible Squares', squares: squareOptions, freeSquare: freeSquare });
});

module.exports = router;
