import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {Route} from 'react-router-dom'
import Search from './components/Search'
import Nav from './components/Nav'
import Add from './components/Add'


function App() {

  useEffect(()=>{
    axios.get('https://acitems.herokuapp.com/api/search')
      .then(res=>setList(res.data))
      .catch(err=>console.log(err))
  },[toggle])


  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <div className="filter">
      <Nav/>
        
        <div>
          <Route exact path="/">
            <Search list={list} filteredList={filteredList} setFilteredList={setFilteredList}/>
          </Route>
          <Route path="/add">
            <Add toggle={toggle} setToggle={setToggle}/>
          </Route>
          
        </div>
      </div>
    </div>
  );
}

export default App;
