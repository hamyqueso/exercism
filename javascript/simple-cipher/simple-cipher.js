//var x = Error('Bad key');

var Cipher = function (str) {
    if (str == null){
        this.key = newKey();
    } 
    else if ((/^[a-z]+$/).test(str) == false){
        throw Error('Bad key');
    }
    else {
        this.key = str;
    }
};

var newKey = function(){
    var set = "abcdefghijklmnopqrstuvwxyz";
    var arr = set.split('');
    var key;
    for(var i = 0; i < 100; i++){
        key += arr[Math.floor(Math.random()*arr.length)]
    }
    return key;

}

Cipher.prototype.encode = function(str){
    var output = '';
    var k = this.key;
    for (var i = 0; i < str.length; i++){
        var keycounter = i;
        while(keycounter >= k.length){
            keycounter -= k.length;
        }
        //if (i > k.length) 
        var shift = k.charCodeAt(keycounter) - 97;
        var character = str.charCodeAt(i);
        output += String.fromCharCode(findCharEncode(character, shift));
    }
    
    return output;
}

Cipher.prototype.decode = function(str){
    var output = '';
    var k = this.key;
    for (var i = 0; i < str.length; i++){
        var keycounter = i;
        while(keycounter >= k.length){
            keycounter -= k.length;
        }
        //if (i > k.length) 
        var shift = k.charCodeAt(keycounter) - 97;
        var character = str.charCodeAt(i);
        output += String.fromCharCode(findCharDecode(character, shift));
    }
    
    return output;
}

var findCharEncode = function(char, shift){
    var newpos = char + shift;
    if (newpos > 122) newpos -= 26;
    return newpos;
}

var findCharDecode = function(char, shift){
    var newpos = char - shift;
    if (newpos < 97) newpos += 26;
    return newpos;
}

module.exports = Cipher;