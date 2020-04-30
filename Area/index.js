// area are defined by
//      bounding box
//      name
//      places
//      neighbours, [{area, rate}] array of areas and rate of daily exchange
//      population
//          - initial, number of initial population
//          - spawn, rate of number of birth per death
//          - residents (alternative to initial) list of agents


import Place from "../Places/index.js";

export class Area{
    INITIAL = 100;


    constructor(name,neighbours=[],population = {}){

        if(!name){
            throw new Error('area name required');
        }

        if(population) {
            this.initial = population.initial;
            this.spawn = population.spawn;
            this.neighbours = population.neighbours;
        }

        this.places = new Map();

        // todo build places
        Place.list.forEach(place=>{
            // todo instance
            this.places.set( place.label, new Place(place) );
        });
    }
    set initial(initial){
        if(!this.population){
            this.population = {};
        }
        if(initial  && !isNaN(initial)){
            this.population.initial = initial;
        } else {
            this.population.initial = this.INITIAL;
        }
    }
    set spawn(spawn){
        if(!this.population){
            this.population = {};
        }
        if(spawn && !isNaN(spawn)){
            this.population.spawn = spawn;
        } else {
            // default stable population, 1 new born each death
            this.population.spawn = 1;
        }
    }
    set neighbours(neighbours){
        if(!this.population){
            this.population = {};
        }
        if(neighbours && Array.isArray(neighbours) && neighbours.length > 0){
            // check
            if(typeof neighbours[0] === "string"){
                // todo retrieve neighbours from list
            }else{
                // got definition of neighbours
                this.population.neighbours = neighbours;
            }
        }
    }
    get getPopulation(){
        return this.population;
    }

}



// test

let a = new Area('pescina ammare');
console.log(a.getPopulation);