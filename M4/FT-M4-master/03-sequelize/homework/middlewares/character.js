const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();

app.post('/character', (req, res) => {
  const {code, name, age, race, hp, mana, date_added, define} = req.body;
  try { 
    res.status(201).json ({msg:addCars(cars, brand)});
  } 
  catch (err) {
    res.status(404).json ({err: err.message});
  }
});

module.exports = router;