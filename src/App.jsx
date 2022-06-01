
import { useEffect, useState } from 'react';
import Create from './components/Create';
import './App.scss';

function App() {
  const [createData, setCreateData] = useState(null);
  useEffect(() => {
    if (null = createData) {
      return;
    }
    createData(createData);

  },[])
  return (
    <>
        <div className='row'>
          <div className='col-4'><Create></Create></div>
          <div className='col-8'>Ex files</div>
        </div>
        </>
  );
}

export default App;
