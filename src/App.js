import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Summery from "./pages/Summery";

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '92vw',
  }
})

function App() {

  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent={'center'} alignContent={'center'} className={classes.root}>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/summery" element={<Summery />} />
          
        </Routes>
      </Grid>
    </>
  );
}

export default App;
