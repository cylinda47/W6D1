const Asteroid = require('./asteroid.js');

const Game = function Game(){
  this.DIM_X = 900;
  this.DIM_Y = 900;
  this.NUM_ASTEROIDS = 20;
  this.asteroids = [];
  this.addAsteroids();
};

Game.prototype.addAsteroids = function addAsteroids() {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
};

Game.prototype.randomPosition = function randomPosition() {
  return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((asteroid) => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function moveObjects() {
  this.asteroids.forEach((asteroid) => asteroid.move());
};

module.exports = Game;
