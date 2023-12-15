import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const passingSearch = (newSearch) => {
    setSearch((prevSearch) => newSearch);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={passingSearch} />
      <h2>{search}</h2>
    </div>
      
  );
}

export default App;
