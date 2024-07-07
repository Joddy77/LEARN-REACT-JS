import TodoCard from "./components/TodoCard";
import Footer from "./components/Footer"

function App() {
  return (
    <main className="p-4">
      <TodoCard day="Tuesday" numberOfActivities={5} />
      
      <Footer message="Hello footer"/>
    </main>
  );
}

export default App;
