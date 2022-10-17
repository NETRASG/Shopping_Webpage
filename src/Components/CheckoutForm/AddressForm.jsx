import React,{useState,useEffect} from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { InputLabel, Select, MenuItem, Button, Grid, Typography,TextField } from '@mui/material'
import FormInput from './FormInput'
import {commerce} from '../../lib/Commerce'
import {Link} from 'react-router-dom'


const AddressForm = ({checkoutToken,next}) => {
    const [shippingCountries,setShippingCountries]=useState([]);
    const [shippingCountry,setShippingCountry]=useState('');

    const [shippingSubDevisions,setShippingSubDevisions]=useState([]);
    const [shippingSubDevision,setShippingSubDevision]=useState('');

    const [shippingOptions,setShippingOptions]=useState([]);
    const [shippingOption,setShippingOption]=useState('');

    const contries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}));
    const subDevisions=Object.entries(shippingSubDevisions).map(([code,name])=>({id:code,label:name}));
    const options=shippingOptions.map((SO)=>({id:SO.id,label:`${SO.description}-${SO.price.formatted_with_symbol}`}));

   console.log(options)



    const fetchShippingContries=async(checkoutTokenId)=>{
        const response=await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        setShippingCountries(response.countries)
        setShippingCountry(Object.keys(response.countries)[0]);
      // console.log(response.countries)
       // console.log(Object.keys(response.countries)[0])
      

    }

    const fetchShippingSubDivisions =async (countryCode)=>{
        const response=await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubDevisions(response.subdivisions);
        setShippingSubDevision(Object.keys(response.subdivisions)[0]);
      // console.log(response);
        
    }

    const fetchShippingOptions=async (checkoutToken,country,region=null)=>{
        const options=await commerce.checkout.getShippingOptions(checkoutToken,{country,region})
        setShippingOptions(options)
        setShippingOption(options[0].id)
      


    }

    useEffect(()=>{
        fetchShippingContries(checkoutToken.id);
    },[]);


    useEffect(()=>{
       if(shippingCountry) fetchShippingSubDivisions(shippingCountry);
    },[shippingCountry]);

    useEffect(()=>{
        if(shippingSubDevision) fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubDevision);
     },[shippingSubDevision]);






    //const method = useForm();
    const { register, handleSubmit}=useForm();
           

    const onSubmit = data => next({...data,shippingCountry,shippingSubDevision,shippingOption});
    return (
       
        <>
        
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            {/* <FormProvider {...method}> */}
                {/* <form onSubmit={method.handleSubmit((data)=> next({...data,shippingCountry,shippingSubDevision,shippingOption}))}> */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField label='First Name' {...register('firstName',{required:true})}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <TextField label='Last Name' {...register('lastName',{required:true})}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField label='Email' {...register('email',{required:true})}/>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                        <TextField label='Address' {...register('address',{required:true})}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <TextField label='City' {...register('city',{required:true})}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <TextField label='Zip/Postal code' {...register('zip',{required:true})}/>
                        </Grid>


                       
                        
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)} >
                                {contries.map((country)=>(
                                    <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>

                                ))}
                                
                            </Select>

                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Devision</InputLabel>
                            <Select value={shippingSubDevision} fullWidth onChange={(e)=>setShippingSubDevision(e.target.value)} >
                                {subDevisions.map((division)=>(
                                    <MenuItem key={division.id} value={division.id}>
                                    {division.label}
                                </MenuItem>

                                ))}
                                
                            </Select>

                        </Grid>
                      
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)} >
                                {options.map((option)=>(
                                    <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>

                                ))}
                                
                            </Select>

                        </Grid>




                    </Grid>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button component={Link} to={'/cart'} variant='outlined'>Back to Cart</Button>
                    <Button type='submit' variant='contained' color='primary'>Next</Button>


                    </div>
                </form>

            {/* </FormProvider> */}
        </>
    )
}

export default AddressForm
