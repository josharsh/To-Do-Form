import React from 'react';
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import Confirm from './Confirm'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 200,},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
selectEmpty: {
   minMenuWidth:120,
  },
}));

export default class Form extends React.Component{

state = {
title: '',
description: '',
duedate: '',
status: '',
}

render(){

const handleSubmit = event => {
   alert("Submitted! Click ok to Continue");

    event.preventDefault()
  }
return(
<body>
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
<Container maxWidth="sm">
<Box my={6}>
<form onSubmit={handleSubmit} id="form">
<TextField label="Title" value={this.state.title} onChange={e => this.setState({title: e.target.value})} ></TextField> 
<br /> <br />

<TextField label="Description" multiline={true} value={this.state.description} onChange={e => this.setState({description: e.target.value})} > </TextField>
<br /><br />

<TextField label="Date" type="date" style={{float: 'left',width: '180px'}}

InputLabelProps={{
          shrink: true,
        }}

onChange={e => this.setState({duedate: e.target.value})} > </TextField> 
<br /><br /><br />

<InputLabel style={{float: 'left'}}>Status</InputLabel> <br /> 
        <Select style={{width: '180px'}}
          value={this.state.status}
          onChange={e => this.setState({status: e.target.value})}
          inputProps={{
            name: 'Status',
            id: 'age-simple',
          }}
        >
          <MenuItem value={"ToDo"}>ToDo</MenuItem>
          <MenuItem value={"OnGoing"}>OnGoing</MenuItem>
          <MenuItem value={"Stalled"}>Stalled</MenuItem>
 	  <MenuItem value={"Done"}>Done</MenuItem>
        </Select><br /> <br />

 <Button type="Submit" variant="contained" onClick={() => {
document.getElementById("form").style.display = "none";

 var modal=document.getElementById("myModal");
	modal.style.display="block";

}} color="primary">
      Submit
    </Button>
</form>
 </Box>
</Container>
<dialog id="myModal">Title:{this.state.title}
<br /> Description:{this.state.description}
<br /> Due Date: {this.state.duedate}
<br /> Status: {this.state.status}
</dialog>
</body>
);

}
}


class DisplayResults extends Component {
   render() {
       return <div>Hi
         {this.props.data.title}
       </div>
   }
}

