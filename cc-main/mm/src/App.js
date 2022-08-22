import { Button } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';

import UserList from './UserList';

function App() {
  let navigate=useNavigate()
  return (
    <div className="App">
     <Button onClick={()=>navigate('/')}>Home</Button>
     <Button onClick={()=>navigate('/userList')}>userList</Button>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path='/userList' element={<UserList/>}/>
    
      </Routes>
    </div>
  );
}

export default App;
