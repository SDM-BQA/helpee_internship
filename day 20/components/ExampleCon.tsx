import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

interface Owner {
  _id: string;
  mobile_no: string;
  first_name: string;
  profile_pic?: string;
}

interface Animal {
  name: string;
  _id: string;
  breed: string;
  age: number;
  owner: Owner;
}

const GET_DOG_AND_CAT = gql`
  query getDogAndCat {
    getAllCats {
      owner {
        profile_pic
        mobile_no
        first_name
      }
      name
      _id
      breed
      age
    }
    getAllDogs {
      owner {
        profile_pic
        mobile_no
        first_name
      }
      name
      _id
      breed
      age
    }
  }

#   mutation updateCatBreed($id: ID!, $name: String!, $age: Int!) {
#     UpdateCatBreed(id: $id, name: $name, age: $age) {
#       _id
#       name
#       age
#     }
#   }
`;

const ExampleCon = () => {
  const [catId, setCatId] = useState("");
  const [catName, setCatName] = useState("");
  const [catAge, setCatAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ catId, catName, catAge });
  };

  const { loading, error, data, refetch } = useQuery(GET_DOG_AND_CAT, {
    pollInterval: 2000,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="shadow-md p-5 w-[900px]">
      <div className="flex items-center gap-5 ">
        <div className="">
          <div className="text-center font-3xl font-bold mb-5">Cat Details</div>

          {data?.getAllCats.map((cat: Animal) => (
            <div
              key={cat._id}
              className="w-full p-4 border rounded-md flex gap-5 shadow-sm mb-5 bg-gray-200"
            >
              <div className="w-[200px] h-[200px]">
                <img
                  src="https://picsum.photos/200"
                  alt={`${cat.owner.first_name}'s profile`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-bold">Cat Name:</span> {cat.name}
                </div>
                <div>
                  <span className="font-bold">ID:</span> {cat._id}
                </div>
                <div>
                  <span className="font-bold">Breed:</span> {cat.breed}
                </div>
                <div>
                  <span className="font-bold">Age:</span> {cat.age} years
                </div>
                <div>
                  <span className="font-bold">Owner Name:</span>{" "}
                  {cat.owner.first_name}
                </div>
                <div>
                  <span className="font-bold">Owner Mobile:</span>{" "}
                  {cat.owner.mobile_no}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="">
          <div className="text-center font-3xl font-bold mb-5">Dog Details</div>
          {data?.getAllDogs.map((dog: Animal) => (
            <div
              key={dog._id}
              className="w-full p-4 border rounded-md flex gap-5 bg-white shadow-sm mb-5"
            >
              <div className="w-[200px] h-[200px]">
                <img
                  src="https://picsum.photos/200"
                  alt={`${dog.owner.first_name}'s profile`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-bold">Dog Name:</span> {dog.name}
                </div>
                <div>
                  <span className="font-bold">ID:</span> {dog._id}
                </div>
                <div>
                  <span className="font-bold">Breed:</span> {dog.breed}
                </div>
                <div>
                  <span className="font-bold">Age:</span> {dog.age} years
                </div>
                <div>
                  <span className="font-bold">Owner Name:</span>{" "}
                  {dog.owner.first_name}
                </div>
                <div>
                  <span className="font-bold">Owner Mobile:</span>{" "}
                  {dog.owner.mobile_no}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full px-5 py-3 bg-blue-500 text-white font-bold text-center mx-auto rounded cursor-pointer"
        onClick={() => refetch()}
      >
        Refetch
      </div>
      <div className="">
        <h1>Change Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
          <input
            type="number"
            placeholder="Enter Cat ID"
            value={catId}
            onChange={(e) => setCatId(e.target.value)}
            className="px-5 py-3"
          />
          <input
            type="text"
            placeholder="Enter Cat Name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            className="px-5 py-3"
          />
          <input
            type="number"
            placeholder="Enter Cat Age"
            value={catAge}
            onChange={(e) => setCatAge(e.target.value)}
            className="px-5 py-3"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ExampleCon;
