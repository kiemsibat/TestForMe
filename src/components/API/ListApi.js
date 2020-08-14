import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RenderInfomation from './RenderInfomation'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const ListApi = (props) => {
    const[render,setRender] = useState('')
  const classes = useStyles();
  const getInfo = () => {
    console.log(props);
    
    setRender((JSON.stringify(props)))
    return(
        <>
            <p>{props}</p>
        </>
    )
  };
  return (
    <> <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <ul>
        <li key={props.id} onClick={getInfo}>
          {props.id} ------ {props.title}
        </li>
      </ul>
        </Grid>
        <Grid item xs={6}>
         <RenderInfomation render={render}/>
        </Grid>
        </Grid>           
    </div>
    </>
  );
};

export default ListApi;
