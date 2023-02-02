

export class Fruit {
    constructor(data){
        this.name = data.name
    }

get template(){
    return`<h1>${this.name}</h1>`
}

}