import { Button } from "@nextui-org/react";
import React, { useState } from "react";

// INI CONTOH PENGGUNAAN USE STATE ATAU LOGIC DI DALAM REACT DENGAN FUNCTION
// const Counter = () =>{
//     const[count, setCount] = useState(0);

//     const incrementCounter = () =>{
//         setCount(count + 1);
//     };

//     const decrementCounter =  () => {
//         if(count === 0) {
//             alert("Tidak bisa berkurang lagi");
//         } else {
//             setCount(count - 1);
//         };
//     }

//     return (
//         <div>
//             <div className="flex items-center justify-around min-h-96">
//                 <Button onClick={decrementCounter}  color="danger">Subtract</Button>
//                 <span className="text-3xl font-semibold">{count}</span>
//                 <Button onClick={incrementCounter} color="primary">
//                     Add
//                 </Button>
//             </div>
//         </div>
//     )
// }

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCounter = () => {
    if (this.state.count === 0) {
      alert("Tidak bisa berkurang lagi");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <div className="flex items-center justify-around min-h-96">
          <Button onClick={this.decrementCounter} color="danger">
            Subtract
          </Button>
          <span className="text-3xl font-semibold">{this.state.count}</span>
          <Button onClick={this.incrementCounter} color="primary">
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
