class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
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


class Sensei extends Ninja {
    constructor() {
        super('Sensei', 200, 10, 10);
        this.sabiduria = 10;
    }

    speakWisdom() {
        console.log('La disciplina puede vencer al talento!')
        super.drinkSake();
    }

}

const sensei = new Sensei();

sensei.speakWisdom();
sensei.showStats();