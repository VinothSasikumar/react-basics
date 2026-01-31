import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ConditionalRendering from './components/ConditionalRendering';
import UseRef from './hooks/UseRef';
import { UserNameContext } from './hooks/UseContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='w-full h-full bg-red-50'>
          <header>
            <nav className='p-2 flex gap-5'>
              <Link to='/conditionalrendering' className='cursor-pointer hover:underline'>Conditional Rendering</Link>
              <Link to='/useref' className='cursor-pointer hover:underline'>UseRef</Link>
            </nav>
          </header>

          <UserNameContext.Provider value={'Vinoth'}>
            <Routes>
              <Route path='/conditionalrendering' element={<ConditionalRendering />} />
              <Route path='/useref' element={<UseRef />} />
            </Routes>
          </UserNameContext.Provider>
        </div>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Link to="/effect">For UseEffect</Link>
        <Link to="/sample">For Sample</Link>
        <Routes>
          <Route path="/effect" element={<UseEffectExample />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Link to="/effectexample">For UseEffect</Link>

        <Routes>
          <Route path='/effectexample' element={<UseEffectNewExample />} />
          <Route path='/effect' element={<UseEffectExampleOld />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
};

export default App;