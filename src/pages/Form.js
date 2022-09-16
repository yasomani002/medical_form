
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import classNames from "classnames";
import { createContext, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import Summery from "./Summery";

const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: '60%',
        boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
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

    }
})
export const ContexData = createContext()

function Form({setShow}) {
    const classes = useStyles()
    const [diagnosed, setDiagnosed] = useState({
        name: "",
        status: ""
    })
    const handleRadio = (e) => {
        e.preventDefault()
        const target = e.target
        const diagnosedName = target.name
        const diagnosedValue = target.value
        setDiagnosed({
            ...diagnosed,
            name: diagnosedName,
            status: diagnosedValue
        })
    }

    // physical
    const [physical, setPhysical] = useState({
        name: "",
        status: ""
    })
    const handlePhysical = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setPhysical({
            ...physical,
            name: name,
            status: value
        })
    }

    //mental
    const [mental, setMental] = useState({
        name: "",
        status: ""
    })
    const handleMental = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setMental({
            ...mental,
            name: name,
            status: value
        })
    }

    //experiance
    const [experiance, setExperiance] = useState({
        name: "",
        status: ""
    })
    const handleExperiance = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setExperiance({
            ...experiance,
            name: name,
            status: value
        })
    }

    // facewhile
    const [facewhile, setFacewhile] = useState([])
    const handleFacewhile = (e) => {
        const data = facewhile
        data.push(e.target.value)
        setFacewhile(data)
    }

    // scale 
    const [scale, setScale] = useState({
        name: '',
        value: ''
    })
    const handleScale = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value

        setScale({
            ...scale,
            name: name,
            value: value
        })
    }

    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const type = ['Not relavent', 'Yes', 'No']

    const type02 = ['Not relavent', 'Daily', 'Serval times/week', 'A few times/month', 'A few times/year']

    const submitFormdata = (e) => {
        e.preventDefault()
    }

    const dataArray = [diagnosed, physical, mental, experiance, scale]

    const obj = [
        { name: 'yash' , age: '23'},
        { name: 'yash' , age: '23'}

    ]


    
    const [ formavalue , setFormvalue] = useState(obj)

    return (
        <>
        <ContexData.Provider value={obj} >
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
                    <form onSubmit={submitFormdata}>
                        {/* diagnosed */}
                        <Grid className={classes.radiogroup}>
                            <span>Have You been diagnosed with this problem</span>
                            <div className={classes.radiobtn}>
                                {
                                    type.map((item) => {
                                        return (
                                            <>
                                                <Radio type="radio" name="diagnoses" value={item} onChange={(e) => handleRadio(e)} />
                                                <label>{item}</label>
                                            </>
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
                                    type.map((item) => {
                                        return (
                                            <>
                                                <Radio type="radio" name="physical" value={item} onChange={(e) => handlePhysical(e)} />
                                                <label>{item}</label>
                                            </>
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
                                    type.map((item) => {
                                        return (
                                            <>
                                                <Radio type="radio" name="mental" value={item} onChange={(e) => handleMental(e)} />
                                                <label>{item}</label>
                                            </>
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
                                    type02.map((item) => {
                                        return (
                                            <>
                                                <Radio type="radio" name="experiance" value={item} onChange={(e) => handleExperiance(e)} />
                                                <label>{item}</label>
                                            </>
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
                                    type02.map((item) => {
                                        return (
                                            <>
                                                <div>
                                                    <Checkbox type="checkbox" value={"not relavent"} onChange={(e) => handleFacewhile(e)} />
                                                    <label>{item}</label>
                                                </div>
                                            </>
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
                                                <Radio type="radio" name="scale" value={item} onChange={(e) => handleScale(e)} />
                                                <label>{item}</label>

                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                    </form>
                </Grid>

                {/* button  */}
                <Grid>
                    <Link to={'/summery'}>
                        <Button variant="contained" onClick={() => setShow(true)} size="lg">Next</Button>
                    </Link>
                </Grid>

                

            </Grid>
            {/* <Summery value={dataArray}/> */}

        </ContexData.Provider>


        </>
    );
}


export default Form;