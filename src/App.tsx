import { BrowserRouter } from "react-router-dom";

import AppRouter from "./core/router/AppRouter";
import NavBar from "./components/NavBar";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="w-full h-[8%]">
          <NavBar />
        </div>
        <div className="w-full h-[92%]">
          <AppRouter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;