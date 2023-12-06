import "./index.css"

function App() {

  return (
    <div className="flex flex-col h-screen" style={{filter:'invert(1) hue-rotate(237deg);'}}>
      <header>header</header>
      <div className="main-container flex-grow flex">
        <div className="main-sidebar">sidebar</div>
        <div className="main flex-grow">main</div>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
