import React from 'react'
import { Button,Stack} from '@mui/material'

const Muibuttons = () => {

    //this is a comment
  return (
    <Stack spacing={4}>
        <Button variant='text'>this is a text</Button>
        <Button variant='contained'>this is a contained button</Button>
        <Button variant='outlined'>this is a outlined button</Button>
        
    </Stack>
  )
}

export default Muibuttons