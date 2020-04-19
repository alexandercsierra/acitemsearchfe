import React from 'react'
import {TimeContainer, Label} from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
import SelectMUI from '@material-ui/core/Select';

const MonthSelect = ({handleChange, currentItem}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              },
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
                <Label>Starting Month</Label>
                <SelectMUI value={currentItem.startMonth} name="startMonth" onChange={handleChange}>
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
                </SelectMUI>
            </TimeContainer>
            <TimeContainer>
                <Label>Ending Month</Label>
                <SelectMUI value={currentItem.endMonth} name="endMonth" onChange={handleChange}>
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
                </SelectMUI>
            </TimeContainer>
        </div>


    )
}

export default MonthSelect;