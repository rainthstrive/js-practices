// Ejemplificacion de hoisting

// var x;
// x = 5;
var x = 5;

function mifunc() {
    // var x;
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    // x = 10;
    var x = 10;
    console.log("x:", x); // 10
};

mifunc();