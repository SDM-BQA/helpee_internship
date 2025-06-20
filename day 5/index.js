var doggesh = {
    eye_count: 2,
    leg_count: 4,
    name: "doggesh bhai",
    sound: "bark",
    nicknames: ["doggessh", "duggal"],
    age: 5,
    bark: function (sound) {
        console.log("sounds like ".concat(sound));
    },
    breed: "german sheffard",
};
console.log(doggesh);
var vehicles = [
    {
        vehicle_name: "cycle",
        wheel_count: 2,
        power_type: "Manual",
    },
    {
        vehicle_name: "auto",
        wheel_count: 3,
        fuel_type: "CNG",
        power_type: "Automatic",
    },
    {
        vehicle_name: "auto",
        wheel_count: 3,
        fuel_type: "CNG",
        power_type: "Automatic",
    },
    {
        vehicle_name: "bus",
        wheel_count: 6,
        fuel_type: "Diesel",
        power_type: "Automatic",
    },
];
vehicles.map(function (vehicle) {
    console.log("Details of ".concat(vehicle.vehicle_name, ":-"));
    console.log("Wheel Count ".concat(vehicle.wheel_count, ":-"));
    console.log("Fuel Type ".concat(vehicle.fuel_type, ":-"));
    console.log("Power Type ".concat(vehicle.power_type, ":-"));
    console.log();
});
var test = {
    value1: "hello",
    value2: "world",
    value3: "india",
};
console.log(test);
var anything = ['hello', 'Electric', 78, 56, 8];
console.log(anything);
