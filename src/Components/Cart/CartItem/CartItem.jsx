import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import useStyles from './Styles';




const CartItem = ({cartItem,handleCartItemUpdateQuatity,handleCartItemRemove}) => {
    const classes=useStyles();
  return (
    <Card >
    <CardMedia className={classes.media} image={cartItem.image.url} alt={cartItem.name}></CardMedia>
    <CardContent className={classes.cardContent}>
        
            <Typography variant='h6' gutterBottom>
                {cartItem.name}
            </Typography>
            <Typography variant='h7'>
                {cartItem.price.formatted_with_symbol}
            </Typography>

    </CardContent>
    <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
            <Button type='button' size='small' onClick={()=>handleCartItemUpdateQuatity(cartItem.id,cartItem.quantity-1)}>-</Button>
            <Typography>{cartItem.quantity}</Typography>
            <Button type='button' size='small' onClick={()=>handleCartItemUpdateQuatity(cartItem.id,cartItem.quantity+1)}>+</Button>

        </div>
        <Button variant='contained' type='button' color='secondary' onClick={()=>handleCartItemRemove(cartItem.id)}>Remove</Button>


    </CardActions>
  

</Card>
  )
}

export default CartItem
