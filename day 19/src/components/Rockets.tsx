import Rocket from "./Rocket";
import { useQuery, gql } from "@apollo/client";

interface RocketEngine {
  type: string;
  number: number;
  thrust_to_weight: number;
}

// Rocket Payload Weight Interface
interface RocketPayloadWeight {
  kg: number;
  lb: number;
  name: string;
}

// Rocket Diameter Interface
interface RocketDiameter {
  meters: number;
  feet: number;
}

// Rocket Height Interface
interface RocketHeight {
  meters: number;
  feet: number;
}

// Rocket Interface
export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: RocketDiameter;
  engines: RocketEngine[];
  first_flight: string;
  height: RocketHeight;
  id: string;
  name: string;
  payload_weights: RocketPayloadWeight[];
  success_rate_pct: number;
  type: string;
  wikipedia: string;
}


const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      active
      boosters
      company
      cost_per_launch
      country
      description
      diameter {
        meters
        feet
      }
      engines {
        type
        number
        thrust_to_weight
      }
      first_flight
      height {
        meters
        feet
      }
      id
      name
      payload_weights {
        kg
        lb
        name
      }
      success_rate_pct
      type
      wikipedia
    }
  }
`;

const Rockets: React.FC = () => {

    const {loading, error, data} = useQuery<{rockets : Rocket[]}>(GET_ROCKETS)

    if(loading) return <div className="text-3xl">Loading...</div>
    if(error) return <div className="">{error.message}</div>

  return (
    <div className="w-[90%] px-8 py-5 border border-slate-200 shadow-lg rounded-lg mx-auto my-10">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center font-bold mb-10 text-orange-500">
          SpaceX Rocket Information
        </h1>
        <div className="grid grid-cols-1  gap-8">
            {
                data?.rockets.map((rocket)=> <Rocket key={rocket.id} rocket={rocket}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default Rockets;
