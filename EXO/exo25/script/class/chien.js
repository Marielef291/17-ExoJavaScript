export class chien {
    static count = 1;
    constructor(nom, race, age){
        this.nom = nom
        this.race = race
        this.age = age
        this.id = chien.count++
    }

}