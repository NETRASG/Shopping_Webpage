import React,{useEffect,useState} from 'react'
import { Typography ,Divider,List,ListItem,ListItemText} from '@mui/material'
import { fontWeight } from '@mui/system'



const Confirmation = ({shippingData,checkoutToken}) => {


  return (
   <>
   <Typography variant='h5' style={{color:'green', textAlign:'center', fontWeight:'bold'}}>Your Order Placed Successfully</Typography>
   <Divider/>
   <Typography variant='h7' style={{textAlign:'center', fontWeight:'bold'}}>Order Details</Typography>

   <List disablePadding >
   {checkoutToken.line_items.map((product)=>(
    <ListItem style={{padding:'10px 0'}} key={product.name}>
        <ListItemText primary={product.name} secondary={`Quantity:${product.quantity}`}/>
        <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>

    </ListItem>
    ))}
     <Typography variant='subtitle1' style={{fontWeight:700}}>
            {checkoutToken.total.formatted_with_symbol}

        </Typography>
    </List>
    <Typography variant='h7' style={{textAlign:'center', fontWeight:'bold'}}>Address Details</Typography><br/>
   <Typography variant='h7'>{`${shippingData.firstName} ${shippingData.lastName}`}</Typography><br/>
   <Typography variant='h7'>{`${shippingData.address}, ${shippingData.city}, ${shippingData.zip}, ${shippingData.shippingCountry}`}</Typography>



   </>
  )
}

export default Confirmation
