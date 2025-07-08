import { Component } from "react";

interface MyComponentsProps {
  name: string;
}

interface MyComponentsState {
  count: number;
  time: string;
}

class ClassBasedComponentEx extends Component<
  MyComponentsProps,
  MyComponentsState
> {
  constructor(props: MyComponentsProps) {
    super(props);
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString()
    };
  }

  // functions
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // render method
  render() {
    const { name } = this.props;
    const { count } = this.state;
    const time  = this.state.time;
    return (
      <div>
        <h2>Hello, {name}</h2>
        <h2>Count is: {count}</h2>
        <h2>Time: {time}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ClassBasedComponentEx;
