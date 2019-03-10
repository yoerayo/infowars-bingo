var express = require('express');
var router = express.Router();

var freeSquare = "GLOBALISTS";

var squareOptions = [
  "Chimera",
  "Animal/human hybrid",
  "George Soros",
  "Reptilian",
  "Trump",
  "Nazi",
  "Nazi collaborator",
  "Iodine",
  "Super Male Vitality",
  "Brain Force",
  "Lizard",
  "Spider",
  "Deep Earth crystal",
  "Con artist",
  "Pedophile",
  "Vampire",
  "I’m going to get to your calls in a few minutes",
  "White supremacist",
  "Sorry for swearing",
  "All in the white papers",
  "Fluoride",
  "Lies about vaccines",
  "Shirtless Alex",
  "Evil laugh",
  "Creepy laugh",
  "Drunk Alex",
  "Owen Shroyer hosts",
  "David Knight hosts",
  "Alex wears a hat",
  "Alex sings along",
  "Gold or silver pitch",
  "Fake crying",
  "Only reads the headline",
  "Sweating noticeably",
  "Alex uses the wrong name for a caller",
  "Unfounded rumor from caller reported as fact",
  "Alex throws something",
  "Alex endangers the crew",
  "Gun in the studio",
  "Ad pivot",
  "Alex does an impression",
  "Alex insults a caller",
  "Goblins",
  "I'm not a racist",
  "Obama",
  "Clinton",
  "Elites",
  "Shuffling papers",
  "Beating on desk",
  "Growling",
  "Empower",
  "Skip the break",
  "Politically",
  "Genetic memory",
  "Anecdote about Alex's violence",
  "Policy wonk",
  "Start it from the beginning",
  "Apologies for interruption",
  "Pause the clip",
  "Alex spins childhood sexual abuse as manliness",
  "Jews",
  "Main stream media",
  "Adrenochrome",
  "Gay frogs",
  "Spider-goats",
  "Drinking on air"
];

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

module.exports = router;
