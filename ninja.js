class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre} - Fuerza: ${this.fuerza} - Velocidad: ${this.velocidad} - Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`Saludo aumentada en 10: ${this.salud}`)
    }
}

const emiliano = new Ninja('Emiliano', 100);

emiliano.sayName();
emiliano.showStats();
emiliano.drinkSake();
emiliano.showStats();