var nombre = "Pepe";

let obj = {
    nombre: "Juan",
    edad: 50,
    display: function () {
        console.log(`me llamo ${this.nombre}`)
    }
}

obj.display();