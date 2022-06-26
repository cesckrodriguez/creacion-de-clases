/*crear clases*/

class animales{ //class + nombre
    constructor(raza, edad, color){  //Metodo constructor, que inicializara nuestro objeto
        this.raza = raza;
        this.edad = edad;
        this.color = color;
        this.info = `La raza de este animal es:  <b>${this.raza}</b> <br>
        La edad es: ${this.edad} <br>
        El color es: ${this.color}<br><br>`;
    }

    //en los metodos no funcionan las funciones flecha, tienen que ser declarados de manera normal
    mostrarInfo(){
        document.write(this.info);
    }
}

let perro = new animales("Perro", 6, "cafe");
let conejo = new animales("conejo", 2, "Blanco");
let gavilan = new animales("Gavilan", 26, "Bulico");

perro.mostrarInfo();
conejo.mostrarInfo();
gavilan.mostrarInfo();