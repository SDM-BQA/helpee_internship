import { Component, type ReactNode } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

// interface Props{}

class FetchingUserClassBased extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network Error");
        return response.json();
      })
      .then((data: User[]) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error: Error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render(): ReactNode {
    const { users, loading, error } = this.state;
    return (
      <div>
        <h2 className="mb-5">User List</h2>
        {loading && <div>Loading user...</div>}
        {error && <div>{error}</div>}
        <ul className="flex flex-col justify-between gap-3">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchingUserClassBased;
