import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const response = await fetch(
    "https://686e18c8c9090c4953884109.mockapi.io/users"
  );
  
  const authObj = await auth()
  const userObj = await currentUser()
  
  console.log({
    authObj,
    userObj
  });
  
  const users = await response.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://686e18c8c9090c4953884109.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    revalidatePath("/mock-users")
    console.log(newUser);
  }

  return (
    <div className="py-10">
      <form
        action={addUser}
        className="flex justify-center flex-col gap-4 w-[400px] mx-auto transition-all duration-500"
      >
        <input
          type="text"
          placeholder="Enter the name"
          name="name"
          className="p-2 border border-gray-400 rounded-lg text-white"
          required
        />
        <input
          type="submit"
          value="Submit"
          className="p-4 bg-blue-500 text-white rounded-2xl cursor-pointer active:scale-[.9]"
        />
      </form>
      <div className="grid grid-cols-4 gap-4 py-10 px-5">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4  shadow-md rounded-lg text-blue-400 bg-white"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
