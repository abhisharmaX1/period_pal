import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Chat from "./components/Chat";
import Explore from "./components/Explore";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar.js";
import Reminder from "./components/Reminder";
import SignUp from "./components/SignUp";


function App() {
  return (
    <>
      <NavBar />
      <Body/>
      <About/>
      <Reminder/>
      <Explore/>
      <Chat/>
      <LogIn/>
      <SignUp/>
    </>
  );
}

export default App;
