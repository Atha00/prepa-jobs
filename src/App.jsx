import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  const tab = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      {tab.map((elem) => {
        return elem % 2 === 0 ? elem : null;
      })}
      <Jobs />

      <Footer />
    </>
  );
}

export default App;
