import { Suspense } from "react";
import "./App.css";
import Countrys from "./Countrys Nation/Countrys";
const CountyPromice = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());


function App() {
  return <>
  
  <Suspense fallback={<h1>Loading Your Country...</h1>}>
        <Countrys CountyPromice={CountyPromice}></Countrys>
  </Suspense>
  
  
  </>;
}

export default App;
