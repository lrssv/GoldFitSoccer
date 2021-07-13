import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  }})(Slider)


export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={1}
        marks
        min={1}
        max={4}
      />
      </div>
  );
}