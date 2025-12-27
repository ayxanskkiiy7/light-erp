import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/welcome";


const App = () => {
  return (
    <BrowserRouter>
      <Welcome/>
    </BrowserRouter>
  );
};

export default App;
