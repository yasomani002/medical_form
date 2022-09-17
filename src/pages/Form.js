
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import classNames from "classnames";
import { createContext, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import Summery from "./Summery";

const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: '60%',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        padding: '20px'
    },
    tpyo01: {
        fontSize: '2.5rem',
        fontWeight: 600,
        color: 'blue',
        fontFamily: 'DM Sans'
    },
    typo02: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: 'black',
        fontFamily: 'DM Sans'
    },
    typo03: {
        fontSize: '1.5rem',
        fontWeight: 500,
        fontFamily: 'DM Sans'
    },
    textarea: {
        margin: '20px 0'
    },
    radiogroup: {
        fontSize: '1.5rem',
        fontWeight: 500,
        fontFamily: 'DM Sans',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        margin: '30px 0'
    },
    radiobtn: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    checkbox: {
        margin: '30px 0'
    },
    textbox: {
        '& textarea': {
            width: '90%',
            height: '150px'
        }
    },
    footer: {
        margin: '20px 0'
    },
    label: {
        '& span': {
            fontSize: '20px'
        }
    }
})
export const ContexData = createContext()

function Form() {
    const classes = useStyles()

    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const type = ['Not relavent', 'Yes', 'No']
    const type02 = ['Not relavent', 'Daily', 'Serval times/week', 'A few times/month', 'A few times/year']

    
    const [ dataArray , setDataArray] = useState()
    const { register, handleSubmit } = useForm()
    const onAdd = (data) => {
        setDataArray(data)
    }

    return (
        <>
            <ContexData.Provider value={dataArray} >
                <Grid className={classes.root}>

                    {/* header01 */}
                    <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
                        <span className={classes.tpyo01}>Pain & Function Description</span>
                        <br />

                        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} >
                            <Typography>
                                <span className={classes.typo02}>
                                    The description of the current situation gives your Optimum
                                </span>
                            </Typography>

                            <Typography>
                                <span className={classes.typo02}>
                                    Trainer a picture of and clues to the underlying causes of your
                                </span>
                            </Typography>

                            <Typography>
                                <span className={classes.typo02}>
                                    problems
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* header02 */}
                    <Grid className={classes.textarea}>
                        <Grid>
                            <span className={classes.typo03}>
                                If you have problem with pain/aches, stifness, weakness or function problems, describe
                                <br />
                                this/these below.(List the symptoms in descending order with the most troublemsome first)
                            </span>
                        </Grid>

                        <Grid className={classes.textbox}>
                            <textarea />
                        </Grid>
                    </Grid>

                    {/* mainform */}
                    <Grid>
                        <form onSubmit={handleSubmit(onAdd)}>
                            {/* diagnosed */}
                            <Grid className={classes.radiogroup}>
                                <span>Have You been diagnosed with this problem</span>
                                <div className={classes.radiobtn}>
                                    {
                                        type.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <FormControlLabel value={item} className={classes.label} control={<Radio size="medium" />} label={item}  {...register('diagnosed')} />
                                                </Fragment>                                            
                                            )
                                        })
                                    }
                                </div>
                            </Grid>

                            {/* physical */}
                            <Grid className={classes.radiogroup}>
                                <span>Did the problem start after a physical trauma ?</span>
                                <div className={classes.radiobtn}>
                                    {
                                        type.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <FormControlLabel value={item} className={classes.label} control={<Radio size="medium" />} label={item}  {...register('physical')} />
                                                </Fragment>                                            
                                            )
                                        })
                                    }
                                </div>
                            </Grid>


                            {/* mental */}
                            <Grid className={classes.radiogroup}>
                                <span>Did the problem start after a mental trauma ?</span>
                                <div className={classes.radiobtn}>
                                    {
                                        type.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <FormControlLabel value={item} className={classes.label} control={<Radio size="medium" />} label={item}  {...register('mental')} />
                                                </Fragment>                                            
                                            )
                                        })
                                    }
                                </div>
                            </Grid>

                            {/* experiance  */}
                            <Grid className={classes.typo03} >
                                <span>How often do you experiance the problem ?</span>
                                <div className={classes.radiobtn}>
                                    {
                                        type02.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <FormControlLabel value={item} className={classes.label} control={<Radio size="medium" />} label={item}  {...register('experiance')} />
                                                </Fragment>                                            
                                            )
                                        })
                                    }
                                </div>
                            </Grid>

                            {/* facewhile */}
                            <Grid className={classNames(classes.checkbox, classes.typo03)} >
                                <span> When do you experiance the problem ?</span>
                                <Grid sx={{ display: 'grid' }}>
                                    {
                                        type02.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <FormControlLabel value={item} className={classes.label} control={<Checkbox size="medium" />} label={item}  {...register('facewhile')} />
                                                </Fragment>                                            
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>

                            {/* scale  */}
                            <Grid className={classes.typo03}>
                                <span>How intenseis the experiance of the problem on average on 0-10 scale ?</span>
                                <div className={classes.radiobtn}>
                                    {
                                        number.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <FormControlLabel value={item} className={classes.label} control={<Radio size="medium" />} label={item}  {...register('scale')} />
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>

                            <Grid container justifyContent={'space-between'} className={classes.footer}>
                                <Grid></Grid>
                                {/* <Link to={'/summery'}> */}
                                <Button variant="contained" type="submit" size="lg">Next</Button>
                                {/* </Link> */}
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </ContexData.Provider>
        </>
    );
}


export default Form;