// const Game = require('./game.js');
// const Asteroid = require('./asteroid.js');
// const MovingObject = require('./moving_object.js');
// //
// // const game = new Game;
// console.log(Game);
// window.Game = Game;
// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

const GameView = require('./game_view.js');

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  canvas.height = 900;
  canvas.width = 900;
  const ctx = canvas.getContext("2d");
  const gameView = new GameView(ctx);
  gameView.start();
});
