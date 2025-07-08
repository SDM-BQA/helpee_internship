import { Component, type ReactNode } from "react";

interface Props {
  userId: number;
}
interface State {
  username: string;
}

class LifeCycleClassBased extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  //   lifecycle methods

  componentDidMount(): void {
    this.fetchUser();
  }

  componentDidUpdate(prevPops: Props): void{
    if(prevPops.userId != this.props.userId)
        this.fetchUser()
  }

  componentWillUnmount(): void {
    console.log("Cleaning up...");
  }

  fetchUser = () => {
    console.log(`Fetching User: ${this.props.userId}`);
    this.setState({ username: `User: #${this.props.userId}` });
  };

  render(): ReactNode {
    return (
      <div className="">
        <div>UserId: {this.props.userId}</div>
        <div className="">Username: {this.state.username}</div>
      </div>
    );
  }
}

export default LifeCycleClassBased;
