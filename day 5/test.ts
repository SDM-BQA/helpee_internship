interface Animal {
  head_count?: number;
  tail_count?: number;
  species?: string;
}

// interface Pet {
//   nicknames?: string[]
// }

// type Speak = (sound: string, volume: number) => string;

interface Dog extends Animal, Pet {
  name: string;
  age?: number;
  bark?: Speak;
}

type FetchData = (user_id: string)=>Promise<string>

// const fetch_data: FetchData = async ()=>{
    
// }

interface Data<T> {
    name: string;
    something: T
}


let k:Data<number> = {
name: 'rj',
something: 90
}

// const dog: Dog = {
//     age: 5,
//     head_count: 1,
//     tail_count: 1,
//     name: "Buddy",
//     species: "Canis familiaris",
//     bark: (sound, vol)=>{
//         console.log(`sound ${sound} at volume ${vol}`)
//         return "ok"
//     }
// }

// console.log(dog.bark("woof", 50))

// type Breeds = "pug" | "pitbull" | "german sheffard";

const breed: Breeds = "german sheffard";

const breeds_list: Breeds[] = ["german sheffard", "pitbull", "pug"];

// const dogs: Dog[] = [
//   {
//     name: "d1",
//     age: 40,
//   },
//   {
//     name: "d2",
//     age: 40,
//   },
//   {
//     name: "d3",
//     age: 40,
//   },
// ];
type Species = "dog" | "cat";
type Something = [string, Species, number, number, 7 | 8];
const something: Something = ["test", "cat", 50, 329, 8];

interface Interface1 {
  value1: string;
}

interface Interface2 {
  value2: string;
  value3: string;
}

// type InterfaceType = Interface1  |  Interface2; //union