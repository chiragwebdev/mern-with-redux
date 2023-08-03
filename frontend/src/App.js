import './App.css';
import Add from './Add'
import Mongodata from './Mongodata';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edit from './edit';

function App() {

  const { datadi } = useSelector(state => state.dataapi)
  return (
    <>
      <Add />

      <Mongodata />

      {/* <Router> */}

        {/* <Edit /> */}

        {/* <Routes> */}
          {/* <Route exact path='/edit' element={<Edit />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
