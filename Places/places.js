// Places are defined by
//      type, [household, public, private]
//      action type, ['physical','self','basic','socialization','culture','health']
//      occupants, [{size, errors,residents, rate}], array of anonymous (size)
//                 or specific actors (residents) spending a ratio of the day there
//                 errors: array of possible deviations


export default PLACES = [
    {
        label:"grocery",
        type:"public",
        action:[ "self"],
        occupants:[
            {
                size:20,
                errors:[-0.9,2],
                rate:0.05,
            }
        ]
    }
];