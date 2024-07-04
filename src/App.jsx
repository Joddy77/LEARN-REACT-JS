import SignUpPage from "./Pages/SignUpPage";
import WishlistPage from "./Pages/WishlistPage";
import { Toaster } from 'sonner'

function App() {
  //  return <SignUpPage />
  return (
    <>
      <Toaster position="top"/>
      <WishlistPage />
    </>
  );
}

export default App;
