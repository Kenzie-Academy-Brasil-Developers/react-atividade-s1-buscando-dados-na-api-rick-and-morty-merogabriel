import "./App.css";
import { useState, useEffect } from "react";
import Characters from './components/Characters'

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/").then((response) => response.json()).then((response => setCharacterList(response.results)))
  }, [])

  console.log(characterList)

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList}></Characters>
      </header>
    </div>
  );
}

export default App;
