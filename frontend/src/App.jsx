import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="body">
        <RoutesComponent />
      </main>
    </div>
  );
}

export default App;
