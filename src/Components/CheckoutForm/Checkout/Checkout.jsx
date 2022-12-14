import React, { useState, useEffect } from 'react'
import { Step, Paper, Stepper, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import useStyles from './Styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {commerce} from '../../../lib/Commerce'
import Confirmation from '../Confirmation';


const steps = ['Shipping address', 'Payment Details'];

const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken,setCheckoutToken]=useState(null);
    const [shippingData,setShippingData]=useState({});

    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try{
            const response=await commerce.checkout.generateToken(cart.id,{type:'cart'});
            console.log(response)
            setCheckoutToken(response);
                
            }
            catch(error){
                
            }
        }
        generateToken();

    }, [cart]);

    const nextStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep+1);
    const backStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep-1);


    const next = (data)=>{
        setShippingData(data);
        console.log(shippingData)


        nextStep();

    }




    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep}  />;

    
   


    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation shippingData={shippingData} checkoutToken={checkoutToken} /> :checkoutToken && <Form  />}

                </Paper>

            </main>

        </>
    )
}

export default Checkout
