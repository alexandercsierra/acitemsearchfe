import React, {useState} from 'react'
import axios from 'axios'
import {Form, MyInput, Label, InfoButton} from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import SelectMUI from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TimeSelect from './TimeSelect'
import { Input } from '@material-ui/core';
import MonthSelect from './MonthSelect'
import {useSpring, animated} from 'react-spring'




export default function Add(props) {
    
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
              margin: theme.spacing(1),
            },
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
          },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }}));

    const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChangeMUI = (event) => {
    setAge(event.target.value);
  };


    const [currentItem, setCurrentItem] = useState({
        name: '',
        price: '',
        category: '',
        startMonth: '',
        endMonth: '',
        startTime: '-1',
        endTime: '-1',
        conditions: ''
    })

    const [time, setTime] = useState({
        start: 'am',
        end: 'am'
    })

    const [message, setMessage] = useState("");

    const [opt, setOpt] = useState(false);

    const handleChange = e => {
        setCurrentItem({
            ...currentItem,
            [e.target.name]: e.target.value
        })
    }

    const handleTimeChange = e => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        //is the price a number?
        if(Number(currentItem.price) == currentItem.price){
            convertTime(currentItem)
            console.log(currentItem.startTime, currentItem.endTime);
                if(!currentItem.category){
                    alert('You must select a category')
                } else{
                    //submit the form
                    let newItem = currentItem;
                    newItem.price = Number(newItem.price);
                    axios.post('https://acitems.herokuapp.com/api/search', newItem)
                        .then(res=>{
                            setMessage(res.data[0].name);
                            setCurrentItem({
                                name: '',
                                price: '',
                                category: '',
                                startMonth: '',
                                endMonth: '',
                                startTime: '-1',
                                endTime: '-1',
                                conditions: ''
                            })

                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            
                            axios.get('https://acitems.herokuapp.com/api/search')
                                .then(res=>props.setList(res.data))
                                .catch(err=>console.log(err))

                        })
                        .catch(err=>console.log(err))
                    console.log(currentItem)
                }
        //price was not a number
        } else {
            alert('price should be a number')
        }
    }

    const convertTime = currentItem => {
        if(currentItem.startTime == 12 && time.start === "am") {
            let newItem = currentItem;
            newItem.startTime = 0;
            setCurrentItem(newItem);
        }
        if(currentItem.endTime == 12 && time.end === "am") {
            let newItem = currentItem;
            newItem.endTime = 0;
            setCurrentItem(newItem);
        }
        if(time.start === "pm"){
            let newItem = currentItem;
            newItem.startTime = Number(newItem.startTime) + 12;
            setCurrentItem(newItem);
        }
        if(time.end === "pm"){
            let newItem = currentItem;
            newItem.endTime = Number(newItem.endTime) + 12;
            setCurrentItem(newItem);
        }
    }

    const moreInfo = () => {
        alert("Item refers to anything that appears as a leaf. Ingredient is anything used in a recipe, such as branches, wood, or seasonal ingredients such as Bunny Day Eggs")
    }

    

    return (
        <div>
            <h1 className="title">Add an Item</h1>
            {message && <h2>You have added: {message}</h2>}
            <Form onSubmit={onSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input style={{padding: ".5% 2%"}} placeholder="name" name="name" id="name" onChange={handleChange} value={currentItem.name} required={true}/>

                {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" /> */}
                
                <Label htmlFor="price">Price</Label>
                <Input style={{padding: ".5% 2%"}} placeholder="price" name="price" id="price" onChange={handleChange} value={currentItem.price} required={true}/>

                
                <Label htmlFor="category" >Category</Label>
                <SelectMUI style={{padding: ".5% 2%", marginBottom: "2%", textAlign: "left"}} value={currentItem.category} name="category" onChange={handleChange} required={true}>
                    <MenuItem value="" selected disabled hidden>Select a Category</MenuItem>
                    <MenuItem value="bug">Bug</MenuItem>
                    <MenuItem value="fish">Fish</MenuItem>
                    <MenuItem value="fossil">Fossil</MenuItem>
                    <MenuItem value="shell">Shell</MenuItem>
                    <MenuItem value="item">Item</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="ingredient">Ingredient</MenuItem>
                    <MenuItem value="wallpaper">Wallpaper</MenuItem>
                    <MenuItem value="flooring">Flooring/Rug</MenuItem>
                    <MenuItem value="other">Other</MenuItem>

                </SelectMUI>
                {/* <InfoButton onClick={moreInfo}>more info</InfoButton>
                <Button variant="contained" style={{width: "150px", background: "transparent"}} onClick={moreInfo}>more info</Button> */}
                <div style={{width: "50%", margin: "0 auto"}}>
                <Button variant="contained" onClick={()=>{setOpt(!opt)}} style={{width: "150px"}}>more options</Button>

                </div>


                { opt && 
                    <div className="fade-in" styles={{display: "flex", flexDirection: "column"}}>
                        <MonthSelect handleChange={handleChange} currentItem={currentItem}/>
                        <TimeSelect handleTimeChange={handleTimeChange} handleChange={handleChange} currentItem={currentItem}/>
                    </div>}
                <div style={{width: "50%", margin: "2% auto"}}>
                    <Button variant="contained" style={{width: "150px"}} type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    )
}


