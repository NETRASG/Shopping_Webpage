import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {


  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>

      {/* {console.log(control)} */}

      <Controller

        name={name}

        render={() => (

          <TextField

            control={control}

            fullWidth

            label={label}

            required

          />

        )}

      />




    </Grid>
  )
}

export default FormInput
