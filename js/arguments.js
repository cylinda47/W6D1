const sum = (...args) => {
  return args.reduce((acc, el) => {
    return acc + el;
  }, 0);
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

////////

// Function.prototype.myBind = function (obj) {
//   const options = Array.from(arguments).slice(1);
//   const func = (...args) => {
//     // const args = Array.from(arguments);
//     this.apply(obj, options.concat(args));
//   };
//   return func;
// };

Function.prototype.myBind = function(obj) {
  const options = Array.from(arguments).slice(1);
  const that = this;
  const func = function() {
    const args = Array.from(arguments);
    return that.apply(obj, options.concat(args));
  };
  return func;
};

///////

markov.says("meow", "Ned");

markov.says.myBind(breakfast, "meow", "Kush")();

markov.says.myBind(breakfast)("meow", "a tree");

markov.says.myBind(breakfast, "meow")("Markov");

const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");




/////////////////

function curriedSum(numArgs) {
  const numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

////

Function.prototype.curry = function (numArgs) {
  const argsArr = [];
  const _func = (arg) => {
    argsArr.push(arg);
    if (argsArr.length === numArgs){
      return this.apply(this, argsArr);
    }else{
      return _func;
    }
  };
  return _func;
};
