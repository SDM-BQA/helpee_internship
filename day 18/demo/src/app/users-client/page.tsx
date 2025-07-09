"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        if (err instanceof Error) {
          setError(`Failed to fetch users: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div className="">Loading...</div>;
  if (error) return <div className="text-red-400 text-center">{error}</div>;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4  shadow-md rounded-lg text-green-400 bg-white"
        >
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
}
