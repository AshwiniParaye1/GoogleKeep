import Menu from "./MainLayout/Menu";
import Navbar from "./MainLayout/Navbar";
import Notes from "./MainLayout/Notes";

function App() {
  return (
    <>
      <h1>Google Keep</h1>
      <Menu />
      <Navbar />
      <Notes />
    </>
  );
}

export default App;
