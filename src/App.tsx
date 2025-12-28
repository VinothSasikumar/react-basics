import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseEffectExample from "./hooks/UseEffectExample";
import Sample from './components/Sample';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/effect">For UseEffect</Link>
        <Link to="/sample">For Sample</Link>
        <Routes>
          <Route path="/effect" element={<UseEffectExample />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;