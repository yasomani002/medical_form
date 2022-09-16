import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form, { ContexData } from "./pages/Form";
import Summery from "./pages/Summery";

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '92vw',
  }
})

function App() {

  const [ show , setShow ] = useState(false)
  const value = useContext(ContexData)
  console.log(value , 'yash')
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent={'center'} alignContent={'center'} className={classes.root}>
        <Routes>
          <Route exact path="/" element={<Form setShow={setShow} />} />
          {/* <Route exact path="/summery" element={<Summery />} /> */}
          
        </Routes>
        { show && <Summery />}

      </Grid>
    </>
  );
}

export default App;
