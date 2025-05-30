import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="col-span-1 md:col-span-6">
            <Todos />
          </div>
          <div className="col-span-1 md:col-span-6">
            <Counter />
          </div>
        </div>
  );
}

export default App;
