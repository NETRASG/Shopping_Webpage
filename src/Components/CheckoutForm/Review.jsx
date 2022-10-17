import React from 'react'
import { Typography,List,ListItem,ListItemText } from '@mui/material'

const Review = ({checkoutToken}) => {
  return (
    <>
    <Typography variant='h6' gutterBottom>Order Summary</Typography>
    <List disablePadding >
   {checkoutToken.line_items.map((product)=>(
    <ListItem style={{padding:'10px 0'}} key={product.name}>
        <ListItemText primary={product.name} secondary={`Quantity:${product.quantity}`}/>
        <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>

    </ListItem>
   ))}
   <List style={{padding:'10px 0'}}>
        <ListItemText primary='total'/>
        <Typography variant='subtitle1' style={{fontWeight:700}}>
            {checkoutToken.total.formatted_with_symbol}

        </Typography>
   </List>

    </List>
    </>
  )
}

export default Review
