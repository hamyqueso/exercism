//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {

    this.value = input;
};

Year.prototype.isLeap = function () {

    var num = this.value;
    
    if (num%4 != 0)return false;
    if (num%100 == 0 && num%400!= 0) return false;
    return true;
};

module.exports = Year;
