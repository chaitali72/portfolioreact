import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 120,
    float: 'right',
  },
}));

const ProjectSelect = (props) => {
  const classes = useStyles();

  return (
    <div className="clearfix">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          Project type
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.project}
          onChange={props.handleChange}
        >
          <MenuItem value={'All'}>All projects</MenuItem>
          <MenuItem value={'React'}>REACT project</MenuItem>
          <MenuItem value={'Mern'}>MERN project</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProjectSelect;