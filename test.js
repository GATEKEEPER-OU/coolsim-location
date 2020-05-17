import Events from "./Events/index.js";

// Locations Module defines area, places
// and interactions occurring within area's place and outside the area
// manage area and places events
//
// INIT
// given a list of area
// generates areas
// associate places within the areas
// associate agents with areas and places
//
// RUNTIME
// generates area and place events
// broadcast events to agents


// test
let e = new Events();

console.log(e.today());