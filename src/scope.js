let globalVar = "soy global";

function mifunc(){
    let localVar = "soy local";
    globalVar = "frijolito";
    const msj = globalVar + ', y yo ' + localVar;
    return msj;
}

console.log(mifunc())