import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import ScheduleMessageButton from "./components/ScheduleMessageButton";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="body">
        <RoutesComponent />
      </main>
      <ScheduleMessageButton />
    </div>
  );
}

export default App;
