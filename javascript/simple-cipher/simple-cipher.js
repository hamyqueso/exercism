var Cipher = function () {};

Cipher.prototype.key = function(){
    
    var key = Math.random().toString(16).toLowerCase();
    return key;

}

module.exports = Cipher;