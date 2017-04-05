// module.exports - this is NodeJS way!
module.exports = () => {
  // generators
  function* idMaker(){
    var index = 0;
    while(true) {
      yield index++;
    }
  }

  var gen = idMaker();

  // console.log(gen.next().value); // 0
  // console.log(gen.next().value); // 1
  // console.log(gen.next().value); // 2

  // generators advanced
  function* idMaker() {
    var index = 0,
      savedValue;
    console.log('inside');
    while(true) {
      index++;
      savedValue = yield index;
      console.log('savedValue', savedValue);
      if (savedValue) {
        index = 0;
      }
    }
  }

  var gen = idMaker();

  // console.log(gen.next());
  // console.log(gen.next());
  // console.log(gen.next(true));
};
