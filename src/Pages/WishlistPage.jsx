import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const WishlistPage = () => {
  const [wishlistInput, setWishlistInput] = useState("");
  const [wishlistItems, setWIshlistItems] = useState([]);

  const addWishlist = () => {
    setWIshlistItems([...wishlistItems, wishlistInput]);
    setWishlistInput("");
  };

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
        value={wishlistInput}
          onChange={(event) => {
            if(event.target.value.length < 5){ 
              setWishlistInput(event.target.value);
            }
          }}
          label="Wishlist Item"
          color="secondary"
        />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div>

      <ul className="list-decimal list-inside text-center">
        {wishlistItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default WishlistPage;