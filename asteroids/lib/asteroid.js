const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const Asteroid = function(pos) {

  MovingObject.call(this, { color: 'red', radius: 10, pos: pos, vel: Util.randomVec(10) });
  // this.COLOR = 'red';
  // this.RADIUS = 10;
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
