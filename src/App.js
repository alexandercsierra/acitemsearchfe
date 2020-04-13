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
  },[])


  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  return (
    <div className="App">
      <div className="filter">
      <Nav/>
        
        <div>
          <Route exact path="/">
            <Search list={list} filteredList={filteredList} setFilteredList={setFilteredList}/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          
        </div>
      </div>
    </div>
  );
}

export default App;
