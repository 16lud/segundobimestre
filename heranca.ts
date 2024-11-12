class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som do animal");
    }
    
    public mover(distancia: number): void {
		    console.log(`${this.nome} se moveu ${distancia} metros.`);
	  }
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    emitirSom(): void {
        console.log("Latido");
    }
}

const dog = new Cachorro("Bolt");
dog.emitirSom(); // Saída: Latido
dog.mover(10); // Bolt se moveu 10 metros.




let animal: Animal = new Animal("ornitorrinco");
animal.emitirSom();
animal.mover(10);