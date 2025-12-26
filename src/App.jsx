import { useState } from "react";

import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderComponent />
      <div>Welcome to our stores</div>
    </>
  );
}

export default App;
