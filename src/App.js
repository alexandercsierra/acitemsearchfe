import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {Route} from 'react-router-dom'
import Search from './components/Search'
import Nav from './components/Nav'
import Add from './components/AddFormComponents/Add'


function App() {

  useEffect(()=>{
    axios.get('https://acitems.herokuapp.com/api/search')
      .then(res=>{
        setList(res.data);
        setMasterList(res.data);
      })
      .catch(err=>console.log(err))
  },[])

  const [masterList, setMasterList] = useState([]);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);
  return (
    <div className="App">
      <div className="filter">
      <Nav/>
        
        <div >
          <Route exact path="/">
            <Search setList={setList} list={list} filteredList={filteredList} setFilteredList={setFilteredList} masterList={masterList} setMasterList={setMasterList}/>
          </Route>
          <Route path="/add">
            <Add setList={setList}/>
          </Route>
          
        </div>
      </div>
    </div>
  );
}

export default App;
