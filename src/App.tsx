import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sample from './components/Sample';
import UseEffectNewExample from './hooks/UseEffectExample';
import UseEffectExampleOld from './hooks/UseEffectExampleOld';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Link to="/effect">For UseEffect</Link>
        <Link to="/sample">For Sample</Link>
        <Routes>
          <Route path="/effect" element={<UseEffectExample />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Link to="/effectexample">For UseEffect</Link>

        <Routes>
          <Route path='/effectexample' element={<UseEffectNewExample />} />
          <Route path='/effect' element={<UseEffectExampleOld />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;