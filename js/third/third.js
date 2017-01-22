module.exports = () => {
  // generators
  function* idMaker() {
    var index = 0;
    console.log('invider');
    while(true)
      yield index++;
  }

  var gen = idMaker();

  // console.log(gen.next());
  // console.log(gen.next());
  // console.log(gen.next());
};
