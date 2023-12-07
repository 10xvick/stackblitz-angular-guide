import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css"

function App() {

  return (
    <div className="flex flex-col h-screen" style={{filter:'invert(1) hue-rotate(237deg);'}}>
      <Header/>
      <div className="main-container flex-grow flex">
        <div className="main-sidebar hidden">sidebar</div>
        <div className="main flex-grow">main</div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
