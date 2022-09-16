


import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { ContexData } from './Form';

const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: '60%',
        boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        padding: '20px'
    },
    typo03: {
        fontSize: '1.5rem',
        fontWeight: 500,
        fontFamily: 'DM Sans'
    },
    margin: {
        margin: '10px 0'
    }
})

function Summery() {

    const value = useContext(ContexData)
    console.log(value , 'yash')
    const classes = useStyles()

    return (
        <>
            <Grid className={classes.root}>
                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >Have You been diagnosed with this problem ?</span>
                    <span >Yes</span>
                </Grid>

                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >Did the problem start after a physical trauma ?</span>
                    <span >Yes</span>
                </Grid>

                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >Did the problem start after a mental trauma ?</span>
                    <span >Yes</span>
                </Grid>

                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >How often do you experiance the problem ?</span>
                    <span >Yes</span>
                </Grid>

                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >When do you experiance the problem ? ?</span>
                    <span >Yes</span>
                </Grid>

                <Grid container className={classNames(classes.typo03, classes.margin)} justifyContent={"space-between"} >
                    <span >How intenseis the experiance of the problem on average on 0-10 scale ?</span>
                    <span >Yes</span>
                </Grid>

            </Grid>
        </>
    )
}

export default Summery