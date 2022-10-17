import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import useStyles from './Styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = ({cart,handleCartEmpty,handleCartItemUpdateQuatity,handleCartItemRemove}) => {
    // const isEmpty = !cart.line_items.length;
    const classes=useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your Cart,
            <Link to={'/'} className={classes.link}> start adding some!</Link>

        </Typography>
    )
    const FilledCart =()=>(
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((cartItem)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} key={cartItem.id}>
                  <div>
                    <CartItem cartItem={cartItem} handleCartItemUpdateQuatity={handleCartItemUpdateQuatity} handleCartItemRemove={handleCartItemRemove}></CartItem>
                  </div>
                </Grid>
            ))}

        </Grid>
        <div className={classes.cardDetails}>
            <Typography>
                SubTotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} onClick={handleCartEmpty} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                <Button component={Link} to={'/checkout'}  className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>CheckOut</Button>

            </div>

        </div>
        </>
    )

if(!cart.line_items)return 'Loading...'

    return (

        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom> Your Shopping Cart</Typography>
            {!cart.line_items.length? <EmptyCart /> : <FilledCart />}
        </Container>

    )
}

export default Cart
