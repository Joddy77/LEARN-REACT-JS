import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";

const WishlistPage = () => {
  const [wishlistInput, setWishlistInput] = useState("");
  const [wishlistItems, setWIshlistItems] = useState([]);

  const fetchWishlistItems = async () => {
    try {
      const respons = await axiosInstance.get("/wishlist-items");

      setWIshlistItems(respons.data);
    } catch (error) {
      toast.error("Server error, please wait for a moment");
    }
  };

  const addWishlist = async () => {
    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishlistInput,
      });
      fetchWishlistItems();
      setWishlistInput("");

      toast.success("You have added an item")
    } catch (error) {
      // console.log(error);
      toast.error("Server error, please wait for a moment");
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
          value={wishlistInput}
          onChange={(event) => {
            // if(event.target.value.length < 5){
            setWishlistInput(event.target.value);
            // }
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
          return <li>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default WishlistPage;
