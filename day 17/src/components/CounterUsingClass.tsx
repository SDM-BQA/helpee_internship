import { Component, type ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface MyComponentsProps {
  name: string;
}
interface MyComponentsState {
  count: number;
}

class CounterUsingClass extends Component<
  MyComponentsProps,
  MyComponentsState
> {
  constructor(props: MyComponentsProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render(): ReactNode {
    const { count } = this.state;
    return (
      <div className="text-xl flex items-center gap-2">
        <span>
          <FaPlus onClick={this.handleIncrement} />
        </span>
        <span>Count is: {count}</span>
        <span>
          <FaMinus onClick={this.handleDecrement} />
        </span>
      </div>
    );
  }
}

export default CounterUsingClass;
