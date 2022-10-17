import React from 'react'
import { Typography,Button,Divider } from '@mui/material'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Review from './Review'



const stripePromise=loadStripe('...')

const PaymentForm = ({checkoutToken,backStep,nextStep}) => {

 
  

    
  return (
    <>
    <Review checkoutToken={checkoutToken}/>
    <Divider/>
    <Typography variant='h6' gutterBottom style={{margin:'20px 0'}}>Payment Method</Typography>
    <Elements stripe={stripePromise}>
        <ElementsConsumer>
            {({elements,stripe})=>(
                <form>
                    <CardElement/>
                    <Typography>Pay via Cash on delivery</Typography>
                    <br/> <br/>
                    <div style={{display:'flex' , justifyContent:'space-between'}}>

                    <Button  variant='outlined' onClick={backStep}>Back</Button>
                    {/* <Button type='submit' variant='contained' disabled={!stripe} color='primary'>Pay {checkoutToken.total.formatted_with_symbol}</Button> */}
                    <Button type='submit' variant='contained' color='primary' onClick={nextStep}  >Confirm Order</Button>



                    </div>
                </form>

            )}
        </ElementsConsumer>

    </Elements>

    
    </>
  )
}

export default PaymentForm
