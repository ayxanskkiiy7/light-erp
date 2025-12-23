import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Component/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
