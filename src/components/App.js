import React from "react";
import GifListContainer from "./GifListContainer";
import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {

const url = "https://api.giphy.com/v1/gifs/search?q=dolphin"
const apiKey = "m5iqlYKuFW45Un5yNw0NyBu1nTJwcraF"

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer url = {url} apiKey = {apiKey}/>
    </div>
  );
}

export default App;
