import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Sample from './components/Sample';

const App = () => {

  // const [message] = useState<string>('Message from Parent');
  // const [secondMessage, setSecondMessage] = useState<string>('Second Message from Parent');

  const [name, setName] = useState<string>('React');

  return (
    <>
      {/* <Sample msg={name} /> */}
      <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
        <TextField label="User Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
        <TextField label="Password" variant="outlined" />
        <Button variant="outlined">Login</Button>
      </div>
    </>
  )
};

export default App;