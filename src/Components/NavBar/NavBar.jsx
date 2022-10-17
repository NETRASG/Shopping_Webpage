import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../image/logo.png'
import useStyles from './Styles'
import { Link,useLocation } from 'react-router-dom'

const NavBar = ({totalItems}) => {
    const classes=useStyles();
    const location=useLocation();

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit' component={Link} to={'/'}>
                    <img src={logo} alt='Commerce.js' height="25px" className={classes.image}/>
                    Shopping App
                </Typography>
                <div className={classes.grow}/>
                <Link to={'/'}>
                <MenuItem>Home</MenuItem>
                </Link>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>

              
                {location.pathname==='/' &&

                <div className={classes.button}>
                    <Link to={'/cart'}>
                    <IconButton aria-label='Show Cart Item' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>

                        </Badge>

                    </IconButton>
                    </Link>
                </div>
}
            </Toolbar>
        </AppBar>
      
    </>
  )
}

export default NavBar
