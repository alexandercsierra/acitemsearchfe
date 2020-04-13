import React, {useState, useEffect} from 'react'
import {SearchBar, SearchContainer, SearchDiv, RowDiv, NumInput, RemoveButton, SearchResults, InputDiv, Collected, Label} from '../styles'

export default function Search(props) {
    const [selected, setSelected] = useState([]);
    const [total, setTotal] = useState(0);
    const [changed, setChanged] = useState(false);
    const [search, setSearch] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (e)=>{
        setSearch(e.target.value);
        props.setFilteredList(props.list.filter(item=>{
            let lowerItem = item.name.toLowerCase()
            let lowerSearch = e.target.value.toLowerCase();
            console.log('loweritem', lowerItem, 'lowerSearch', lowerSearch)
            if (lowerSearch !== ""){
                return lowerItem.includes(lowerSearch)
            }
        }))
    }

    const handleCheck = e => {
        setIsChecked(!isChecked)
    }

    useEffect(()=>{
        if(isChecked){
            setTotal(total*.8)
        } else{
            setTotal(total/.8)
        }
    },[isChecked])

    const removeItem = (item) => {
        let arr = [...selected];
        let filtered = arr.filter(thing=>thing.id !== item.id)
        setSelected(filtered);
        // if (arr[index].id === item.id){
        //     arr[index].mult = 1;
        //     let spliced = arr.splice(index, 1);
        //     console.log(spliced);
        //     setSelected(arr.splice(index, 1));
        // }
    }

    const addToSelected = (selected, item) => {
        if(selected.includes(item)===false){
            item.mult = 1;
            setSelected([...selected, item])
            setSearch("");
            let filter = props.list.filter(thing=>thing!==item)
            props.setList(filter)
            props.setFilteredList([])
        }
        

    }

    const clearAll = (e)=>{
        e.preventDefault();
        setSelected([])
        props.setList(props.masterList);
        setSearch("");
    }

    useEffect(()=>{
        let reduced = selected.reduce((total, current)=>{
            console.log('total', total, 'current', current.price)
            return total + (current.price * current.mult);
        },0)
        setTotal(reduced);
    },[selected, changed])



    return (
        <div>
            <h1 className="title">Animal Crossing New Horizons Calculator</h1>
            <SearchContainer>
            <SearchDiv>
                <h3>Search for an item</h3>
                <InputDiv>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        addToSelected(selected, props.filteredList[0])
                    }}>
                        <SearchBar value={search} onChange={handleChange}/>
                    </form>
                    <SearchResults>
                        {/* <h2>Filtered</h2> */}
                        {props.filteredList.map(item=>{
                            return(
                            <p key={item.name} className="listItem" onClick={()=>{addToSelected(selected, item)}}>{`${item.name}: ${item.price} Bells`}</p>
                            )
                        })}
                    </SearchResults>
                </InputDiv>
            </SearchDiv>
            <SearchDiv>
                <h2>Collected</h2>
                {selected.map((item, index)=>{
                    return(
                        <Collected>
                            <span className="collected" key={index}>{`${item.name}: ${item.price} Bells`}</span>
                            {/* <select onChange={(e)=>{
                                item.mult=e.target.value;
                                setChanged(!changed)}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select> */}
                            <NumInput value={item.mult} onChange={(e)=>{
                                item.mult=e.target.value;
                                setChanged(!changed)}}/>
                            <RemoveButton onClick={()=>{removeItem(item)}}>X</RemoveButton>
                        </Collected>
                    )
                })}
                {selected.length > 0 && <button onClick={clearAll}>Clear All</button>}
                <label htmlFor="box" aria_label="stuff">Drop-Off Box</label>
                <input type="checkbox" id="box" checked={isChecked} onClick={handleCheck}/>
                <RowDiv>
                    <h3 style={{fontSize: "1.5rem", paddingRight: "1%"}}>Total:   </h3>
                    <p style={{fontSize: "1.5rem"}}><span style={{color: "#ffd04f"}}>{total}</span>{` Bells`}</p>
                </RowDiv>
            </SearchDiv>
        </SearchContainer>
        </div>
    )
}
