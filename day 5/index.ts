interface Animal {
  eye_count: number;
  leg_count: number;
  sound: string;
}

//  array
interface Pet {
  nicknames: string[];
}

type Speak = (sound: string) => void;
type Breeds = "pug" | "pitbull" | "german sheffard";

interface Dog extends Animal, Pet {
  name: string;
  age?: number;
  bark?: Speak;
  breed: Breeds;
}

const doggesh: Dog = {
  eye_count: 2,
  leg_count: 4,
  name: "doggesh bhai",
  sound: "bark",
  nicknames: ["doggessh", "duggal"],
  age: 5,
  bark: (sound) => {
    console.log(`sounds like ${sound}`);
  },
  breed: "german sheffard",
};

console.log(doggesh);

// doggesh.bark("hello");

//--------------------------------//

type PoweType = "Manual" | "Automatic";
type FuelType = "CNG" | "Petrol" | "Diesel" | "Electric"

interface Vehicle {
  vehicle_name: string;
  wheel_count: number;
  fuel_type?: FuelType;
  power_type: PoweType;
}

const vehicles: Vehicle[] = [
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

vehicles.map((vehicle) => {
  console.log(`Details of ${vehicle.vehicle_name}:-`);
  console.log(`Wheel Count ${vehicle.wheel_count}:-`);
  console.log(`Fuel Type ${vehicle.fuel_type}:-`);
  console.log(`Power Type ${vehicle.power_type}:-`);
  console.log();
});

// -----------------------------------------------

interface Interface1 {
  value1: string;
}

interface Interface2 {
  value2: string;
  value3: string;
}

type InterfaceType = Interface1 | Interface2;

const test: InterfaceType = {
  value1: "hello",
  value2: "world",
  value3: "india",
};

console.log(test);

type Anything = [string, FuelType, number, number, 7 | 8]

const anything:Anything =['hello','Electric', 78, 56, 8]

console.log(anything);
