import React, {useState} from 'react'
import axios from 'axios'
import {Form, Input, Select, TimeContainer, Textarea, Label, Button, InfoButton} from '../styles'

export default function Add(props) {
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
            //is the start time before the end time?
            // if(currentItem.startTime && currentItem.endTime && currentItem.startTime >= currentItem.endTime){
            //     alert('Start time must be before end time')
            // } else {
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
                            props.setToggle(!props.toggle);

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
            <h1 class="title">Add an Item</h1>
            {message && <h2>You have added: {message}</h2>}
            <Form onSubmit={onSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input placeholder="name" name="name" id="name" onChange={handleChange} value={currentItem.name} required/>
                <Label htmlFor="price">Price</Label>
                <Input placeholder="price" name="price" id="price" onChange={handleChange} value={currentItem.price} required/>

                <Label htmlFor="category" style={{marginTop: "4%"}}>Category</Label>
                <InfoButton onClick={moreInfo}>more info</InfoButton>
                <Select value={currentItem.category} name="category" onChange={handleChange} required>
                    <option value="" selected disabled hidden>Select a Category</option>
                    <option value="bug">Bug</option>
                    <option value="fish">Fish</option>
                    <option value="fossil">Fossil</option>
                    <option value="item">Item</option>
                    <option value="clothing">Clothing</option>
                    <option value="shell">Shell</option>
                    <option value="ingredient">Ingredient</option>
                </Select>

                <Label>Starting Month</Label>
                <Select value={currentItem.startMonth} name="startMonth" onChange={handleChange}>
                    <option value="" selected disabled hidden>Select a Month</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </Select>

                <Label>Ending Month</Label>
                <Select value={currentItem.endMonth} name="endMonth" onChange={handleChange}>
                    <option value="" selected disabled hidden>Select a Month</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </Select>
    
                <Label style={{marginTop: "4%", textAlign: "center", marginBottom: "1%"}} htmlFor="startTime">Start Time</Label>
                <TimeContainer>
                    <Select value={currentItem.startTime} name="startTime" onChange={handleChange}>
                        <option value="-1" selected disabled hidden>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Select>
                    <Select name="" onChange={handleTimeChange}>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </Select>
                </TimeContainer>
                    <Label style={{textAlign: "center", marginBottom: "1%"}}>End Time</Label>
                <TimeContainer>
                    <Select value={currentItem.endTime} name="endTime" onChange={handleChange}>
                        <option value="-1" selected disabled hidden>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Select>
                    <Select name="end" onChange={handleTimeChange}>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </Select>
                </TimeContainer>

                <Label style={{marginTop: "4%"}} htmlFor="conditions">Other Conditions</Label>
                <Textarea value={currentItem.conditions} onChange={handleChange} name="conditions" placeholder="other conditions ex: rainy"/>
                <Button>Submit</Button>

            </Form>
        </div>
    )
}
