var Pangram = function(input){
  this.input = input;
};

Pangram.prototype.isPangram = function(){
  var str = this.input;
  str = str.replace(/["'\s]+/g, '').toLowerCase();
  //var current = /[abcdefghijklmnopqrstuvwxyz]+/;
  for (var code = 97; code < 123; code++){
    // var current = new RegExp(String.fromCharCode(code));

    if(!str.includes(String.fromCharCode(code))){
      return false;
    }
  
  }


  return true;
}

// var pangram = new Pangram('"The quick brown fox jumps over the lazy dog"');

// console.log(pangram.isPangram());

module.exports = Pangram;
