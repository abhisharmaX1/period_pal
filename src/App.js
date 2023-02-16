import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Chat from "./components/Chat";
import Explore from "./components/Explore";
import NavBar from "./components/NavBar.js";
import Reminder from "./components/Reminder";


function App() {
  return (
    <>
      <NavBar />
      <Body/>
      <About/>
      <Reminder/>
      <Explore/>
      <Chat/>
    </>
  );
}

export default App;
