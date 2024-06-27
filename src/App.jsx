import { Button, Input } from "@nextui-org/react";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import { useRef, useState } from "react";

function App() {  
  const inputRef = useRef();

  const [wishlistItems, setWIshlistItems] = useState([
    "Keyboard",
    "Laptop",
    "Mouse",
  ]);

  const addWishlist = () => {
    const wishlistInputValue = inputRef.current.value;
  };

  return (
    // <>
    //   {/* <Header /> */}
    //   {/* <TodoCard day="Monday" numberOfActivities={3}/>
    //   <TodoCard day="Tuesday" numberOfActivities={5}/>
    //   <TodoCard day="Wednesday" numberOfActivities={1}/> */}

    //     {/* <Counter /> */}
    //   {/* <Footer message="Halo Dunia"/> */}
    // </>

    <>
      <div className="flex items-center p-4 gap-4">
        <Input ref={inputRef} label="Wishlist Item" color="secondary" />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div>

      <ul>
        {wishlistItems.map(item) = () => {
          return <li>{item}</li>;
        }}
      </ul>
      {/* <p className="text-center font-semibold text-2xl">{wishlistItem}</p> */}
    </>
  );
}

export default App;
