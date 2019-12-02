const { Router } = require("express");
const Card = require('./model')

const router = new Router();

router.get("/cards", (req, res, next) => {
  Card.findAll()
    .then(cards => {
      const random = Math.floor(Math.random() * cards.length)
      // console.log("random", cards[random])
      // let nextrandom;
      // nextrandom = Math.floor(Math.random() * cards.length)
      // if (random === nextrandom) {
      //   nextrandom = Math.floor(Math.random() * cards.length)
      //   return cards[nextrandom]
      // }
      // console.log("nextrandom", cards[nextrandom])

      res.send({ random: cards[random], cards });
    })
    .catch(next);
});


module.exports = router;