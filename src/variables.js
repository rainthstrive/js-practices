function papitas(marca){
    const mensaje = `Mis papitas favoritas son ${marca}`;
    console.log(mensaje);
}

// papitas("Sabritas");

function salsas(lista){
    const despliegue = `${lista[0]}, ${lista[1]}, y ${lista[2]}`;
    const mensaje = `Las salsas para papitas son: ${despliegue}`;
    console.log(mensaje);
}

let salsaLista = ['Botanera', 'Primo', 'Valentina'];

salsas(salsaLista);