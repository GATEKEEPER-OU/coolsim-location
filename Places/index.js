import uniqid from "uniqid";
import PLACES from "./places.js";
import Events from "./Events/index.js";
import Utils from "../../utilities/index.js";

const PostOffice = Utils.messages.postoffice;
const Clock = Utils.time.ClockTower;



export default class Place{
    PLACESMAP = PLACES.reduce((partial,place)=>{
        partial.set(place.label,place);
        return partial;
    },new Map());

    PLACESSET = PLACES.reduce((partial,place)=>{
        partial.add(place);
        return partial;
    },new Set());

    constructor(place, clock = new Clock(), events = new Events(), postOffice = new PostOffice()){
        if(!place){
            throw new Error("ERROR: place required!")
        }

        this.id = uniqid();
        this.name = `${place.label}-${this.id}`;
        this.address = `place-${this.name}`;

        Object.assign(this,place);

        this.clock = clock;
        this.events = events;
        this.postoffice = postOffice;
    }

    // todo generate a random place


    set visit(visitor){

        if(!this.visiting){
            this.visiting = {
                current: this.clock.date,
                occupants: []
            };
        }

        this.visiting.occupants.push(visitor);
        // todo check trigger events
    }

    static get list(){
        return PLACES;
    }
    static get map(){
        return this.PLACESMAP;
    }
    static get set(){
        return this.PLACESSET;
    }
}



// test
let p = new Place('grocery');
console.log(p);