import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import View from './components/View';
import Header from './components/Header';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='view' element={<View/>}></Route>
        <Route path='edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
