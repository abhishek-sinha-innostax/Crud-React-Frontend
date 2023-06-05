// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Header from './components/Header';
import Read from './components/Read';

function App() {
  return (
    <div className="container">
      <Header/>
    {/* <Create/> */}
    <Routes>
<Route exact path='/' element={<Read/>}></Route>
<Route exact path='/create' element={<Create/>}></Route>
<Route exact path='/edit' element={<Edit/>}></Route>
    </Routes>

    {/* <Footer/> */}
    </div>
  );
}

export default App;
