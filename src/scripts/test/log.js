// module.exports = function(arg) {
//   console.log(arg + ' works!!!!!!++');
// }


class ConsoleWrapper{
  speak(){
    // debugger;
    console.log("Hello, I am ", this);
  }
}

module.exports = ConsoleWrapper;
