import React, {useState} from 'react'
import axios from 'axios'
import {Form, Input, Select, TimeContainer, Textarea, Label, InfoButton} from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SelectMUI from '@material-ui/core/Select';


const TimeSelect = ({handleChange, currentItem, handleTimeChange}) => {
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
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <TimeContainer>
                <Label style={{marginTop: "4%", textAlign: "center", marginBottom: "1%"}} htmlFor="startTime">Start Time</Label>
                <SelectMUI value={currentItem.startTime} name="startTime" onChange={handleChange}>
                    <MenuItem value="-1" selected disabled hidden>0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                </SelectMUI>
                <SelectMUI name="" onChange={handleTimeChange}>
                    <MenuItem value="am">AM</MenuItem>
                    <MenuItem value="pm">PM</MenuItem>
                </SelectMUI>
            </TimeContainer>
            <TimeContainer>
                <Label style={{textAlign: "center", marginBottom: "1%"}}>End Time</Label>
                <SelectMUI value={currentItem.endTime} name="endTime" onChange={handleChange}>
                    <MenuItem value="-1" selected disabled hidden>0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                </SelectMUI>
                <SelectMUI name="end" onChange={handleTimeChange}>
                    <MenuItem value="am">AM</MenuItem>
                    <MenuItem value="pm">PM</MenuItem>
                </SelectMUI>
            </TimeContainer>

        </div>
    )
}

export default TimeSelect;