var Cipher = function (str) {
    if (str == null){
        this.key = newKey();
    } 
    if (str)
};

var newKey = function(){
    var set = "abcdefghijklmnopqrstuvwxyz";
    var arr = set.split('');
    var key = arr[Math.floor(Math.random()*arr.length)]
    return key;

}

//console.log(Cipher.prototype.key());

module.exports = Cipher;